<script setup>
import { onMounted, computed, ref } from 'vue';
import {useBoardRegisterStore} from '../stores/useBoardRegisterStore';
import {useRouter} from 'vue-router'

const boardRegisterStore = useBoardRegisterStore();
const router = useRouter();

const board=ref({
    title:'',
    content:'',
    writer:''
});

const boardRegister = async () =>{
    const response = await boardRegisterStore.setBoard({
        title: board.value.title,
        content: board.value.content,
        writer: board.value.writer
    });
    router.push(`/`);
}
</script>

<template>
    <div>
        <div> 제목 : <input type="text" v-model="board.title"></div>
        <div> 내용 : <textarea v-model="board.content"></textarea></div>
        <div> 작성자 :  <input type="text" v-model="board.writer"> </div>
    </div>
    <button @click="boardRegister">등록
    </button>
</template>

<style scoped>
</style>