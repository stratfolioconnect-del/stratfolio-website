"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);
  return <>{year}</>;
}
