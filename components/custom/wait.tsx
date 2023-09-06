import { cache, use, useId } from "react";

const wait = cache((name: any, timeout: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, timeout);
  });
});
export function useWait(ms: number) {
  const id = useId();
  use(wait(id, ms));
}

export function Wait({ ms }: { ms: number }) {
  useWait(ms);
  return null;
}
