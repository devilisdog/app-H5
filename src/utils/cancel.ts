export let cancelTokenList: any = [];

export function addCancelToken(payload) {
  cancelTokenList.push(payload);
}
export function deleteCancelToken(payload) {
  cancelTokenList.splice(payload, 1);
}

export function cancelRequest() {
  cancelTokenList.forEach((cancel, index) => {
    cancel();
    deleteCancelToken(index);
  });
}
