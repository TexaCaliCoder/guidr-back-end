const bcrypt = require('bcryptjs')

module.exports ={
    users: {
        user1:{
            id: 1,
            name: 'Chris Roth',
            username: 'TheRoth',
            password: bcrypt.hashSync('testing123'),
        },
        user2:{
            id: 2,
            name: 'Megan Fontenot',
            username: 'BabyGirl',
            password: bcrypt.hashSync('testing123'),
        },
        user3:{
            id: 3,
            name: 'Corey Deveroux',
            username: 'TheSupervisor',
            password: bcrypt.hashSync('testing123'),
        },
        user4:{
            id: 4,
            name: 'Megan Fontenot',
            username: 'BabyGirl',
            password: bcrypt.hashSync('testing123'),
        },
        user5:{
            id: 5,
            name: 'James Franco',
            username: 'TheGoodDude',
            password: bcrypt.hashSync('testing123'),
        },
        user6:{
            id: 6,
            name: 'William Edward',
            username: 'TheKid',
            password: bcrypt.hashSync('testing123'),
        }
        
    },
    trips:{
        trip1:{
            id:1,
            username:'BabyGirl',
            title: 'Road Trip To Dallas',
            type: 'road-trip',
            private: false,
            duration: '3 Days',
            description:'pointing out the good stops from Iowa to Dallas',
            date:'5/03/2019' 
        },
        trip1:{
            id:2,
            username:'TheRoth',
            title: 'Hunting in west Texas',
            type: 'hunting',
            private: false,
            duration: '3 Days',
            description:'Tracking and hunting white tail deer in West Texas',
            date:'2/10/2018' 
        },
        trip3:{
            id:3,
            username:'TheRoth',
            title: 'Camping in the Baron wastelands of Iowa',
            private: false,
            duration: '3 Days',
            description:'Freezing and Dying',
            date:'11/24/2017' 
        },
        trip4:{
            id:1,
            username:'TheKid',
            title: 'hiking the Appalachian trail',
            private: false,
            duration: '8 Days',
            description:'Enjoying wild life and looking for old back woods stills',
            date:'7/12/18' 
        },

    }

}