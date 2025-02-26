<script setup>
import { onMounted, computed, ref } from 'vue'
import { useBoardListStore } from '../stores/useBoardListStore';
import { useLoadingStore } from '../stores/useLoadingStore';

const boardListStore = useBoardListStore();
const loadingStore = useLoadingStore();

onMounted(async () => {
    loadingStore.startLoading();
    await boardListStore.getBoardList();
    loadingStore.stopLoading();
});

</script>

<template>
    <div>
        <ul class = "topbar">
            <li> 게시글 번호 </li>
            <li> 게시글 제목</li>
            <li> 게시글 작성자</li>
            <li> 댓글 수 </li>
        </ul>
        <ul class="contentbar" v-for="board in boardListStore.boardList">
            <li>  {{ board.idx }} </li>
            <li> {{board.title}}</li>
            <li> {{board.writer}}</li>
            <li> {{ board.commentCnt }} </li>
        </ul>
    </div>
</template>

<style scoped>
	ul{

margin:0px; 

padding:11px;

}
	.topbar li{

list-style: none;

margin: 0;

padding: 0px;

    	   width: 131px;

    	   float: left;
    	   text-align: center;

	} 
    .contentbar li{ 

list-style: none; 

    	   margin: 0;

  	   padding: 0px;

    	   width: 131px;

    	   float: left;

    	   color: black;

    	   text-align: center;

	}
</style>