const { createApp } = Vue;

createApp({
    data(){
        return{
            contacts: [
                { id: 1, name: "Michele", avatar: "./img/avatar_1.jpg", lastActive: "12:00" },
                { id: 2, name: "Fabio", avatar: "./img/avatar_2.jpg", lastActive: "13:00" },
                { id: 3, name: "Samuele", avatar: "./img/avatar_3.jpg", lastActive: "10:30" },
                { id: 4, name: "Alessandro B.", avatar: "./img/avatar_4.jpg", lastActive: "11:30" },
                { id: 5, name: "Alessandro L.", avatar: "./img/avatar_5.jpg", lastActive: "11:00" },
                { id: 6, name: "Claudia", avatar: "./img/avatar_6.jpg", lastActive: "16:00" },
                { id: 7, name: "Federico", avatar: "./img/avatar_7.jpg", lastActive: "12:30" },
                { id: 8, name: "Davide", avatar: "./img/avatar_8.jpg", lastActive: "12:00" },
              ]
        };
    },
    methods: {
        
    },
}).mount('#app')

