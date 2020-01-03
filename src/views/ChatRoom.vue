<template>
  <div class="chatroom">
    <div class="form">
      <input type="text" v-model="msg" @keydown.enter="Send()" />
      <button @click="Send()">123</button>
    </div>
    <div class="message" v-for="(msgInfo, index) in messages" :key="index">
      ({{ msgInfo.PostTime | formatDateTime }}) {{ msgInfo.Name }}:{{
        msgInfo.Content
      }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as signalR from '@aspnet/signalr';
import MessageInfo from '../Models/MessageInfo';
@Component
export default class ChatRoom extends Vue {
  msg = '';
  messages: MessageInfo[] = [];
  connection: signalR.HubConnection | null = null;
  public created() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:8080/api/chatHub')
      // .withUrl('http://localhost:9528/api/notificationHub')
      .build(); //64466

    this.connection.start().then(() => {
      if (this.connection) {
        this.connection.on('ServerMessage', data => {
          console.log('ServerMessage:', data);
          this.messages.push(data);
        });
      }
    });
  }
  Send() {
    if (!this.connection) {
      return;
    }
    this.connection
      .invoke('ClientMessage', new MessageInfo(0, 'Jay', new Date(), this.msg))
      .catch(err => {
        return console.error(err);
      });
    this.msg = '';
  }
}
</script>

<style scoped lang="scss">
.chatroom {
  max-height: 100%;
  overflow-x: auto;
  //   overflow: hidden;
}
</style>
