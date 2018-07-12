function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const label = `${propertyKey} invocation duration`;

  descriptor.value = function(...args: any[]) {
    console.log(`${propertyKey} has been called with ${JSON.stringify(args)}`);
    console.time(label);

    const result = originalMethod.apply(this, args);

    console.timeEnd(label);
    console.log(`${propertyKey} result is ${JSON.stringify(result)}`);

    return result;
  }
}

class TestLog {
  private n: number;

  constructor(n = 10) {
    this.n = n;
  }

  @log2(false)
  testLog(name: string) {
    let result = '';
    for(let i = 0; i < this.n; i++) {
      result += i;
    }

    return result;
  }
}

// Decorator factory
function log2(isTimeNeeded = true) {
  return function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const label = `${propertyKey} invocation duration`;
  
    descriptor.value = function(...args: any[]) {
      console.log(`${propertyKey} has been called with ${JSON.stringify(args)}`);
      isTimeNeeded && console.time(label);
  
      const result = originalMethod.apply(this, args);
  
      isTimeNeeded && console.timeEnd(label);
      console.log(`${propertyKey} result is ${JSON.stringify(result)}`);
  
      return result;
    }
  }
}
