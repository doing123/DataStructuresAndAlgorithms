/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 现有四则运算，加上支持括号
  // 词法分析：把输入的字符串流变成 token。
  const genTokens = (input) => {
    let token = [];
    let leftBracketLen = 0; // 考虑括号内括号的情况
    const start = (char) => {
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(char)) {
        token.push(char);
        return inNumber;
      }

      if (char === '(') {
        leftBracketLen++;
        return inBrackets;
      }
      if (char === ')') {
        return start;
      }

      // 支持负数
      if (char === '-') {
        if (
          tokens.length === 0 ||
          ['+', '-', '*', '/'].includes(tokens[tokens.length - 1].type)
        ) {
          token.push(char);
          return inNumber;
        }
      }

      if (['+', '-', '*', '/'].includes(char)) {
        emmitToken(char, char);
        return start;
      }

      if (char === ' ') {
        return start;
      }

      if (['\r', '\n'].includes(char)) {
        return start;
      }

      if (char === 'EOF') {
        emmitToken(char, char);
        return start;
      }
    };

    const inBrackets = (char) => {
      if (char === '(') leftBracketLen++;
      if (char === ')') leftBracketLen--;
      if (char !== ')' || (char === ')' && leftBracketLen > 0)) {
        token.push(char);
        return inBrackets;
      }
      emmitToken('Brackets', token.join(''));
      token = [];
      return start(char);
    };

    const inNumber = (char) => {
      // 支持小数
      if (
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(char)
      ) {
        token.push(char);
        return inNumber;
      } else {
        emmitToken('Number', token.join(''));
        token = [];
        return start(char);
      }
    };

    const tokens = [];
    function emmitToken(type, value) {
      tokens.push({ type, value });
    }

    let state = start;

    for (let c of input.split('')) {
      state = state(c);
    }

    state('EOF');
    return tokens;
  };

  const tokens = genTokens(s);

  // 语法分析：把 token 变成抽象语法树 AST。
  // 语法分析：根据每个产生式来写一个函数。
  /**
   * <AdditiveExpression> ::=
   *     <MultiplicativeExpression>
   *     |<AdditiveExpression><+><MultiplicativeExpression>
   *     |<AdditiveExpression><-><MultiplicativeExpression>
   */
  const AdditiveExpression = (source) => {
    if (source[0].type === 'MultiplicativeExpression') {
      let node = {
        type: 'AdditiveExpression',
        children: [source[0]],
      };
      source[0] = node;
      return AdditiveExpression(source);
    }

    if (
      source[0].type === 'AdditiveExpression' &&
      source[1] &&
      source[1].type === '+'
    ) {
      let node = {
        type: 'AdditiveExpression',
        operator: '+',
        children: [source.shift(), source.shift()],
      };
      MultiplicativeExpression(source);
      node.children.push(source.shift());
      source.unshift(node);
      return AdditiveExpression(source);
    }

    if (
      source[0].type === 'AdditiveExpression' &&
      source[1] &&
      source[1].type === '-'
    ) {
      let node = {
        type: 'AdditiveExpression',
        operator: '-',
        children: [source.shift(), source.shift()],
      };
      MultiplicativeExpression(source);
      node.children.push(source.shift());
      source.unshift(node);
      return AdditiveExpression(source);
    }

    if (source[0].type === 'AdditiveExpression') {
      return source[0];
    }

    MultiplicativeExpression(source);
    return AdditiveExpression(source);
  };

  /**
   * <MultiplicativeExpression> ::=
   *     <Number>
   *     |<MultiplicativeExpression><*><Number>
   *     |<MultiplicativeExpression></><Number>
   */
  const MultiplicativeExpression = (source) => {
    // 处理括号
    if (source[0].type === 'Brackets') {
      const tokens = genTokens(source[0].value);
      const ast = Expression(tokens);
      let node = {
        type: 'MultiplicativeExpression',
        children: [ast],
      };
      source[0] = node;
      return MultiplicativeExpression(source);
    }

    if (source[0].type === 'Number') {
      let node = {
        type: 'MultiplicativeExpression',
        children: [source[0]],
      };
      source[0] = node;
      return MultiplicativeExpression(source);
    }

    if (
      source[0].type === 'MultiplicativeExpression' &&
      source[1] &&
      source[1].type === '*'
    ) {
      let node = {
        type: 'MultiplicativeExpression',
        operator: '*',
        children: [source.shift(), source.shift(), source.shift()],
      };
      source.unshift(node);
      return MultiplicativeExpression(source);
    }

    if (
      source[0].type === 'MultiplicativeExpression' &&
      source[1] &&
      source[1].type === '/'
    ) {
      let node = {
        type: 'MultiplicativeExpression',
        operator: '/',
        children: [source.shift(), source.shift()],
      };
      MultiplicativeExpression(source);
      node.children.push(source.shift());
      source.unshift(node);
      return MultiplicativeExpression(source);
    }

    if (source[0].type === 'MultiplicativeExpression') {
      return source[0];
    }

    return MultiplicativeExpression(source);
  };

  function Expression(source) {
    if (
      source[0].type === 'AdditiveExpression' &&
      source[1] &&
      source[1].type === 'EOF'
    ) {
      let node = {
        type: 'Expression',
        children: [source.shift(), source.shift()],
      };
      source.unshift(node);
      return node;
    }
    AdditiveExpression(source);
    return Expression(source);
  }

  console.log(tokens.slice(0));
  const ast = Expression(tokens);
  console.log(ast);

  // 解释执行：后序遍历 AST，执行得出结果。
  function evaluate(node) {
    if (node.type === 'Expression') {
      return evaluate(node.children[0]);
    }

    if (node.type === 'AdditiveExpression') {
      if (node.operator === '-') {
        return evaluate(node.children[0]) - evaluate(node.children[2]);
      }

      if (node.operator === '+') {
        return evaluate(node.children[0]) + evaluate(node.children[2]);
      }

      return evaluate(node.children[0]);
    }

    if (node.type === 'MultiplicativeExpression') {
      if (node.operator === '*') {
        return evaluate(node.children[0]) * evaluate(node.children[2]);
      }

      if (node.operator === '/') {
        return evaluate(node.children[0]) * evaluate(node.children[2]);
      }

      return evaluate(node.children[0]);
    }

    if (node.type === 'Number') {
      return Number(node.value);
    }
  }

  const result = evaluate(ast);
  return result;
};

// calculate("2 + (10 / 2) * 2");
// @lc code=end
