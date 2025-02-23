const { createApp } = Vue;

createApp({
    data(){
        return{
            activeContact: null,
            messageInput: '',
            searchTerm:'',
            contacts: [
                {   
                    id: 1,
                    name: "Michele",
                    avatar: "./img/avatar_1.jpg", 
                    lastActive: "12:00",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                    lastMessage: null
                }, 
                { 
                    id: 2, 
                    name: "Fabio", 
                    avatar: "./img/avatar_2.jpg", 
                    lastActive: "13:00",
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ], 
                    lastMessage: null
                },
                { 
                    id: 3, 
                    name: "Samuele", 
                    avatar: "./img/avatar_3.jpg", 
                    lastActive: "10:30",
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ], 
                    lastMessage: null
                },
                { 
                    id: 4, 
                    name: "Alessandro B.", 
                    avatar: "./img/avatar_4.jpg", 
                    lastActive: "11:30",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ], 
                    lastMessage: null
                },
                { 
                    id: 5, 
                    name: "Alessandro L.", 
                    avatar: "./img/avatar_5.jpg", 
                    lastActive: "11:00",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ], 
                    lastMessage: null
                },
                { 
                    id: 6, 
                    name: "Claudia", 
                    avatar: "./img/avatar_6.jpg", 
                    lastActive: "16:00",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ], 
                    lastMessage: null
                },
                { 
                    id: 7, 
                    name: "Federico", 
                    avatar: "./img/avatar_7.jpg", 
                    lastActive: "12:30",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ], 
                    lastMessage: null
                },
                { 
                    id: 8, 
                    name: "Davide", 
                    avatar: "./img/avatar_8.jpg", 
                    lastActive: "12:00",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ], 
                    lastMessage: null
                },
            ],
        };
    },
    methods: {
        setActiveContact(contact) {
            this.activeContact = contact;
        },
        sendMessage() {
            if (this.activeContact && this.messageInput.trim()) {
              const newMessage = {
                message: this.messageInput,
                status: 'sent',
                date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
              };
              this.activeContact.messages.push(newMessage);
              console.log("New message:", newMessage);
              this.messageInput = ''; 
              setTimeout(() => {
                this.activeContact.messages.push({
                  message: "ok",
                  status: "received",
                  date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                });
              }, 1000);
            } else {
              console.error("nessun contatto selezionato");
            }
        },    
    },
    // filtro l'array contacts originale in base al valore della proprietà searchTerm.
    // Restituisco un nuovo array contenente solo i contatti i cui nomi (in minuscolo) includono la versione minuscola del termine di ricerca
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => {
                contact.lastMessage = contact.messages.length > 0 ? contact.messages[contact.messages.length - 1] : null;
                return contact.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
        }
    }

}).mount('#app')

