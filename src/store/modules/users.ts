import { ref } from "vue";
import { defineStore } from "pinia";

import { store } from "@/store";

export const useUserStore = defineStore("user", () => {
  const userName = ref<string>("");
  const sso = ref<string>("");
  const avatar = ref<string>("");
  async function getUser() {
    userName.value = "beautyTang";
  }
  function resetToken() {
    userName.value = "";
    sso.value = "";
  }

  async function logout() {
    resetToken();
  }
  return {
    userName,
    resetToken,
    getUser,
    logout,
    avatar,
    sso,
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}
