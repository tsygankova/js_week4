// конспект

const printMessage = function(message) {
    console.log(message);
  };
  
  const higherOrderFunction = function(callback) {
    const string = 'HOCs are awesome';
    callback(string);
  };
  
  higherOrderFunction(printMessage);

  const repeatLog = function(n) {
    for (let i = 0; i < n; i += 1) {
      console.log(i);
    }
  };
  
  repeatLog(5);

  const printValue = function(value) {
    console.log(value);
  };
  
  const prettyPrint = function(value) {
    console.log('Logging value: ', value);
  };
  
  const repeat = function(n, action) {
    for (let i = 0; i < n; i += 1) {
      action(i);
    }
  };
  
  // Передаем printValue как callback-функцию
  repeat(3, printValue);
  // 0
  // 1
  // 2
  
  // Передаем prettyPrint как callback-функцию
  repeat(3, prettyPrint);
  // Logging value: 0
  // Logging value: 1
  // Logging value: 2

  //  callback-фунции часто анонимны и объявляются во время передачи
  const repeat = function(n, action) {
    for (let i = 0; i < n; i += 1) {
      action(i);
    }
  };
  
  const labels = [];
  
  repeat(5, value => {
    labels.push(`Label ${value + 1}`);
  });
  
  console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]
  
  const bar = function() {
    console.log('bar');
  };
  
  const baz = function() {
    console.log('baz');
  };
  
  const foo = function() {
    console.log('foo');
    bar();
    baz();
  };
  
  foo();
  