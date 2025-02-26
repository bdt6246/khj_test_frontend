<script setup>
import { onMounted, computed, ref } from 'vue'
import { useBoardDetailStore } from '../stores/useBoardDetailStore';
import { useLoadingStore } from '../stores/useLoadingStore';
import { useRoute } from "vue-router";

const boardDetailStore = useBoardDetailStore();
const loadingStore = useLoadingStore();
const route = useRoute();

onMounted(async () => {
    const idx = route.params.idx;
    loadingStore.startLoading();
    await boardDetailStore.getBoardDetail(idx);
    loadingStore.stopLoading();
});

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
            댓글
            <div v-for="conmment in boardDetailStore.board.comments">
                {{ comment.writer }} - {{ comment.content }}
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>