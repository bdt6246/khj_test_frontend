import { defineStore } from "pinia";
import axios from "axios";

export const useBoardDetailStore = defineStore("boardDetail", {
    state: () => ({ 
        isLoading: false,
        board:{},
    }),
    
    actions: {
        async getBoardDetail(idx) {
            this.isLoading = true;
            this.error = null;
            
            try {
                const response = await axios.get(`/api/board/${idx}`);
                this.board = response.data;
                console.log("게시판 데이터 : ", this.board);
                return this.board;
            } catch (error) {
            } finally {
                this.isLoading = false;
            }
        },
    },
});