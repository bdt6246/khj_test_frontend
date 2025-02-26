<script setup>
import { onMounted, computed, ref } from 'vue'
import { useBoardDetailStore } from '../stores/useBoardDetailStore';
import { useLoadingStore } from '../stores/useLoadingStore';
import { useRoute } from "vue-router";
import { useCommentRegisterStore }  from '../stores/useCommentRegisterStore';

const boardDetailStore = useBoardDetailStore();
const commentRegisterStore = useCommentRegisterStore();
const loadingStore = useLoadingStore();
const route = useRoute();

onMounted(async () => {
    const idx = route.params.idx;
    loadingStore.startLoading();
    await boardDetailStore.getBoardDetail(idx);
    loadingStore.stopLoading();
});

const comment=ref({
    boardIdx: '',
    content:'',
    writer:''
});

const commentRegister = async (idx) =>{
    const response= await commentRegisterStore.setComment({
        boardIdx: Number(idx),
        content: comment.value.content,
        writer: comment.value.writer
    });
    window.location.reload();
};

</script>
<template>
    <div>
        <div>
            제목 : {{ boardDetailStore.board.title }}
        </div>
        <div>
            내용 : {{ boardDetailStore.board.content }}
        </div>
        <div>
            작성자 : {{ boardDetailStore.board.writer }}
        </div>
        <div>
            작성자: <input type="text" v-model="comment.writer"><br>
            댓글 등록 <textarea v-model="comment.content"></textarea>
            <button @click="commentRegister(boardDetailStore.board.idx)">등록하기</button>
        </div>
        <div>
            댓글
            <div v-for="comment in boardDetailStore.board.comments">
                {{ comment.writer }} - {{ comment.content }}
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>