function dealy(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve,ms);
  });
}

async function helloAsync() {
    await dealy(3000);
    return 'hello async';
}

async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();
