// Any
function whatever(): number {
  return 10;
}

// Void
function printData(data: any): void {
  console.log(data);
  return;
}

// Never
function throwError(): never {
  throw new Error('Test');
}
