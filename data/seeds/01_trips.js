
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {
          username:'BabyGirl',
          title: 'Road Trip To Dallas',
          type: 'road-trip',
          private: false,
          duration: '3 Days',
          description:'pointing out the good stops from Iowa to Dallas',
          date:'5/03/2019' 
      },
      {
        username:'TheRoth',
        title: 'Hunting in west Texas',
        type: 'hunting',
        private: false,
        duration: '3 Days',
        description:'Tracking and hunting white tail deer in West Texas',
        date:'2/10/2018' 
    },
    {
      username:'TheRoth',
      title: 'Camping in the Baron wastelands of Iowa',
      type: 'camping',
      private: false,
      duration: '3 Days',
      description:'Freezing and Dying',
      date:'11/24/2017' 
  },
  {
    username:'TheKid',
    title: 'hiking the Appalachian trail',
    type: 'hiking',
    private: false,
    duration: '8 Days',
    description:'Enjoying wild life and looking for old back woods stills',
    date:'7/12/18' 
},
      ]);
    });
};
