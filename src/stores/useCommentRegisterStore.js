import { defineStore } from "pinia";
import axios from "axios";

export const useCommentRegisterStore = defineStore("commentRegister", {
    state: () => ({ 
        isLoading: false,
    }),

    actions:{
        async setComment(payload) {
            try {
                this.isLoading = true; // 로딩 상태 시작
                const response = await axios.post(`/api/comment/register?boardIdx=${payload.boardIdx}`, {
                    content: payload.content,
                    writer: payload.writer
                });
                return response.data.result;
            } catch (error) {
            } finally {
                this.isLoading = false; // 로딩 상태 종료
            }
        },
    }
});