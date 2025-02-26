import { defineStore } from "pinia";
import axios from "axios";

export const useBoardRegisterStore = defineStore("boardRegister", {
    state: () => ({ 
        isLoading: false,
    }),

    actions:{
        async setBoard(payload) {
            try {
                this.isLoading = true; // 로딩 상태 시작
                const response = await axios.post(`/api/board/register`, payload);
                return response.data.result;
            } catch (error) {
            } finally {
                this.isLoading = false; // 로딩 상태 종료
            }
        },
    }

});