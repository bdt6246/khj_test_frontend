import { defineStore } from "pinia";
import axios from "axios";

export const useBoardListStore = defineStore("boardList", {
    state: () => ({ 
        isLoading: false,
        boardList:[],
    }),
    
    actions: {
        async getBoardList() {
            this.isLoading = true;
            this.error = null;
            
            try {
                const response = await axios.get(`/api/board/list`);
                this.boardList = response.data;
                console.log(this.boardList);
                return this.boardList;
            } catch (error) {
            } finally {
                this.isLoading = false;
            }
        },
    },
});