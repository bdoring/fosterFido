import {GET_FEED_RESULTS_PENDING, GET_FEED_RESULTS_SUCCESS} from '../actions/feed.actions';

export default(state = [], action) => {
  switch (action.type) {
    case GET_FEED_RESULTS_PENDING:
      return state;

    case GET_FEED_RESULTS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
}

let initialState = [

  {

    "options": {

      "option": [

        {
          "$t": "altered"
        }, {
          "$t": "hasShots"
        }, {
          "$t": "housetrained"
        }
      ]
    },

    "status": {
      "$t": "A"
    },

    "contact": {
      "phone": {},

      "state": {
        "$t": "AZ"
      },
      "address2": {},

      "email": {
        "$t": "azmastiffrescue@yahoo.com"
      },

      "city": {
        "$t": "Glendale"
      },

      "zip": {
        "$t": "85308"
      },
      "fax": {},
      "address1": {}
    },

    "age": {
      "$t": "Baby"
    },

    "size": {
      "$t": "M"
    },

    "media": {

      "photos": {

        "photo": [

          {
            "@size": "pnt",
            "$t": "http://photos.petfinder.com/photos/pets/38198033/1/?bust=1496199643&width=60&-pnt.jpg",
            "@id": "1"
          }, {
            "@size": "fpm",
            "$t": "http://photos.petfinder.com/photos/pets/38198033/1/?bust=1496199643&width=95&-fpm.jpg",
            "@id": "1"
          }, {
            "@size": "x",
            "$t": "http://photos.petfinder.com/photos/pets/38198033/1/?bust=1496199643&width=500&-x.jpg",
            "@id": "1"
          }, {
            "@size": "pn",
            "$t": "http://photos.petfinder.com/photos/pets/38198033/1/?bust=1496199643&width=300&-pn.jpg",
            "@id": "1"
          }, {
            "@size": "t",
            "$t": "http://photos.petfinder.com/photos/pets/38198033/1/?bust=1496199643&width=50&-t.jpg",
            "@id": "1"
          }
        ]
      }
    },

    "id": {
      "$t": "38198033"
    },
    "shelterPetId": {},

    "breeds": {

      "breed": [

        {
          "$t": "Cattle Dog"
        }, {
          "$t": "Labrador Retriever"
        }
      ]
    },

    "name": {
      "$t": "Dilly"
    },

    "sex": {
      "$t": "F"
    },

    "description": {
      "$t": "Dilly is a nice girl that would do best with another dog to keep her busy. She is fine with cats,dogs, and kids\nwww.azmastiffrescue.com"
    },

    "mix": {
      "$t": "yes"
    },

    "shelterId": {
      "$t": "AZ241"
    },

    "lastUpdate": {
      "$t": "2017-05-31T03:00:43Z"
    },

    "animal": {
      "$t": "Dog"
    }
  }, {

    "options": {

      "option": [

        {
          "$t": "altered"
        }, {
          "$t": "hasShots"
        }, {
          "$t": "housetrained"
        }
      ]
    },

    "status": {
      "$t": "A"
    },

    "contact": {

      "phone": {
        "$t": "(480) 737-6089"
      },

      "state": {
        "$t": "AZ"
      },
      "address2": {},

      "email": {
        "$t": "SPRAZinfo@gmail.com"
      },

      "city": {
        "$t": "Glendale"
      },

      "zip": {
        "$t": "85308"
      },
      "fax": {},
      "address1": {}
    },

    "age": {
      "$t": "Adult"
    },

    "size": {
      "$t": "L"
    },

    "media": {

      "photos": {

        "photo": [

          {
            "@size": "pnt",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/1/?bust=1491338245&width=60&-pnt.jpg",
            "@id": "1"
          }, {
            "@size": "fpm",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/1/?bust=1491338245&width=95&-fpm.jpg",
            "@id": "1"
          }, {
            "@size": "x",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/1/?bust=1491338245&width=500&-x.jpg",
            "@id": "1"
          }, {
            "@size": "pn",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/1/?bust=1491338245&width=300&-pn.jpg",
            "@id": "1"
          }, {
            "@size": "t",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/1/?bust=1491338245&width=50&-t.jpg",
            "@id": "1"
          }, {
            "@size": "pnt",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/2/?bust=1491338246&width=60&-pnt.jpg",
            "@id": "2"
          }, {
            "@size": "fpm",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/2/?bust=1491338246&width=95&-fpm.jpg",
            "@id": "2"
          }, {
            "@size": "x",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/2/?bust=1491338246&width=500&-x.jpg",
            "@id": "2"
          }, {
            "@size": "pn",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/2/?bust=1491338246&width=300&-pn.jpg",
            "@id": "2"
          }, {
            "@size": "t",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/2/?bust=1491338246&width=50&-t.jpg",
            "@id": "2"
          }, {
            "@size": "pnt",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/3/?bust=1491338246&width=60&-pnt.jpg",
            "@id": "3"
          }, {
            "@size": "fpm",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/3/?bust=1491338246&width=95&-fpm.jpg",
            "@id": "3"
          }, {
            "@size": "x",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/3/?bust=1491338246&width=500&-x.jpg",
            "@id": "3"
          }, {
            "@size": "pn",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/3/?bust=1491338246&width=300&-pn.jpg",
            "@id": "3"
          }, {
            "@size": "t",
            "$t": "http://photos.petfinder.com/photos/pets/37778199/3/?bust=1491338246&width=50&-t.jpg",
            "@id": "3"
          }
        ]
      }
    },

    "id": {
      "$t": "37778199"
    },
    "shelterPetId": {},

    "breeds": {

      "breed": {
        "$t": "German Shepherd Dog"
      }
    },

    "name": {
      "$t": "Ghost"
    },

    "sex": {
      "$t": "M"
    },

    "description": {
      "$t": "Ghost: The Picture of Happiness and Love \n\n\n11-year-old, white, large, male German Shepherd \nGood with other dogs: Yes \nGood with children: Yes \nGood with cats: Unknown \n\nWhat a gentle soul! Sweet senior Ghost is an absolute lover boy. He adores people of all ages \nand all he wants out of life is love and attention and a soft bed. And who can blame him! \n\nPoor Ghost was an owner surrender, and we found out shortly after taking him in that he had a \ntumor that needed attention. Low and behold, that was one big tumor. It was about 10 pounds! \nBut luckily, it was benign, and Ghost has healed up and is a brand new man with an even better \npersonality since heâs in no pain now. \n\nThis boy is pretty funny. Just when you think youâre done petting him and loving on him, he \ncomes back for more. He just doesnât want you to stop. He loves walks and short hikes with our \nlong-time fosters John and Deb. He gets along well with other dogs in the home too, although \nhe does tend to react on a leash to other dogs when walking. \n\nIf you want to see how much energy an 11-year-old can have, just get Ghostâs leash out! He \ngets so excited! He also rides well in a car and loves taking trips. And this guy has been to some \nof our events and just adores children. He also likes to hang out by an open door or window \nand watch the birds as he enjoys being happy and relaxed, which is a joy to see. \n\nIf youâre looking for a gentle, mellow dog that just loves attention and people, then Ghost is \nyour guy! Please fill out ourÂ \nonline application\nÂ to get the approval process started. We will only \nschedule meet and greets with an approved application. All staff members are volunteers and \nare not compensated for their time and expenses. Many juggle family and full-time careers \nwhile volunteering at Saving Paws. Please be patient, as sometimes it takes up to 5 days to \nprocess an application."
    },

    "mix": {
      "$t": "no"
    },

    "shelterId": {
      "$t": "AZ457"
    },

    "lastUpdate": {
      "$t": "2017-04-04T20:37:25Z"
    },

    "animal": {
      "$t": "Dog"
    }
  },
  {

"options": {

"option": [

{
"$t": "altered"
},

{
"$t": "hasShots"
}
]
},

"status": {
"$t": "A"
},

"contact": {

"phone": {
"$t": "(480) 737-6089"
},

"state": {
"$t": "AZ"
},
"address2": {},

"email": {
"$t": "SPRAZinfo@gmail.com"
},

"city": {
"$t": "Glendale"
},

"zip": {
"$t": "85308"
},
"fax": {},
"address1": {}
},

"age": {
"$t": "Young"
},

"size": {
"$t": "M"
},

"media": {

"photos": {

"photo": [

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/38612084/1/?bust=1498698816&width=60&-pnt.jpg",
"@id": "1"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/38612084/1/?bust=1498698816&width=95&-fpm.jpg",
"@id": "1"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/38612084/1/?bust=1498698816&width=500&-x.jpg",
"@id": "1"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/38612084/1/?bust=1498698816&width=300&-pn.jpg",
"@id": "1"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/38612084/1/?bust=1498698816&width=50&-t.jpg",
"@id": "1"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/38612084/2/?bust=1504303338&width=60&-pnt.jpg",
"@id": "2"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/38612084/2/?bust=1504303338&width=95&-fpm.jpg",
"@id": "2"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/38612084/2/?bust=1504303338&width=500&-x.jpg",
"@id": "2"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/38612084/2/?bust=1504303338&width=300&-pn.jpg",
"@id": "2"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/38612084/2/?bust=1504303338&width=50&-t.jpg",
"@id": "2"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/38612084/3/?bust=1504303339&width=60&-pnt.jpg",
"@id": "3"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/38612084/3/?bust=1504303339&width=95&-fpm.jpg",
"@id": "3"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/38612084/3/?bust=1504303339&width=500&-x.jpg",
"@id": "3"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/38612084/3/?bust=1504303339&width=300&-pn.jpg",
"@id": "3"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/38612084/3/?bust=1504303339&width=50&-t.jpg",
"@id": "3"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/38612084/4/?bust=1504303339&width=60&-pnt.jpg",
"@id": "4"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/38612084/4/?bust=1504303339&width=95&-fpm.jpg",
"@id": "4"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/38612084/4/?bust=1504303339&width=500&-x.jpg",
"@id": "4"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/38612084/4/?bust=1504303339&width=300&-pn.jpg",
"@id": "4"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/38612084/4/?bust=1504303339&width=50&-t.jpg",
"@id": "4"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/38612084/5/?bust=1504303340&width=60&-pnt.jpg",
"@id": "5"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/38612084/5/?bust=1504303340&width=95&-fpm.jpg",
"@id": "5"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/38612084/5/?bust=1504303340&width=500&-x.jpg",
"@id": "5"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/38612084/5/?bust=1504303340&width=300&-pn.jpg",
"@id": "5"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/38612084/5/?bust=1504303340&width=50&-t.jpg",
"@id": "5"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/38612084/6/?bust=1504303340&width=60&-pnt.jpg",
"@id": "6"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/38612084/6/?bust=1504303340&width=95&-fpm.jpg",
"@id": "6"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/38612084/6/?bust=1504303340&width=500&-x.jpg",
"@id": "6"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/38612084/6/?bust=1504303340&width=300&-pn.jpg",
"@id": "6"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/38612084/6/?bust=1504303340&width=50&-t.jpg",
"@id": "6"
}
]
}
},

"id": {
"$t": "38612084"
},
"shelterPetId": {},

"breeds": {

"breed": {
"$t": "Shepherd"
}
},

"name": {
"$t": "Huntley"
},

"sex": {
"$t": "M"
},

"description": {
"$t": "Huntley: This Shy Boy Is Learning to LOVE Attention \n\n1-year-old male, medium, Czech Shepherd mix \nGood with other dogs: Unknown \nGood with children: Unknown \nGood with cats: Unknown \n\n\nSweet boy Huntley is looking for a patient, loving family to teach him how wonderful life can be as a \nfamily pet! \n\nWe donât know much about Huntleyâs past, but weâre pretty sure he spent some time out on his own \nforaging for food. Huntley is very, very sweet, but also shy. When he first came to rescue, we could \nbarely get him to leave his kennel. But with love and kindness from our volunteers, heâs shown that not \nonly does he love attention, this boy loves to play with toys too. He prefers the company of women and \nseems to be particularly afraid of men, so his future family will need to be prepared to help him \novercome his fear of men. \n\nLook at that adorable face, and heâs got the cutest head tilt to top it off. We arenât sure if Huntley is \ngood with other dogs, so weâd recommend a meet and great in advance. Huntley will require patience \nand love to help him learn how to be a beloved family member, so POSITIVE training is a must for this \nboy. Heâll need help on his leash skills and commands to help build his confidence. \n\nWe donât know if heâs good with children, but heâs a really sweet boy, so older, well-mannered children \nthat wonât scare him might be OK. And we think Huntley would do best in a quiet home that wonât \noverwhelm him since heâs starting from scratch. \n\nIf you can give Huntley a love, indoor home, please fill out ourÂ \nonline application\nÂ to get the approval \nprocess started. We will only schedule meet and greets with an approved application. All staff members \nare volunteers and are not compensated for their time and expenses. Many juggle family and full-time \ncareers while volunteering at Saving Paws. Please be patient, as sometimes it takes up to 5 days to \nprocess an application."
},

"mix": {
"$t": "no"
},

"shelterId": {
"$t": "AZ457"
},

"lastUpdate": {
"$t": "2017-06-29T01:08:22Z"
},

"animal": {
"$t": "Dog"
}
},

{

"options": {

"option": {
"$t": "altered"
}
},

"status": {
"$t": "A"
},

"contact": {

"phone": {
"$t": "(480) 737-6089"
},

"state": {
"$t": "AZ"
},
"address2": {},

"email": {
"$t": "SPRAZinfo@gmail.com"
},

"city": {
"$t": "Glendale"
},

"zip": {
"$t": "85308"
},
"fax": {},
"address1": {}
},

"age": {
"$t": "Adult"
},

"size": {
"$t": "L"
},

"media": {

"photos": {

"photo": [

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/33429868/1/?bust=1443830915&width=60&-pnt.jpg",
"@id": "1"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/33429868/1/?bust=1443830915&width=95&-fpm.jpg",
"@id": "1"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/33429868/1/?bust=1443830915&width=500&-x.jpg",
"@id": "1"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/33429868/1/?bust=1443830915&width=300&-pn.jpg",
"@id": "1"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/33429868/1/?bust=1443830915&width=50&-t.jpg",
"@id": "1"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/33429868/2/?bust=1443830915&width=60&-pnt.jpg",
"@id": "2"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/33429868/2/?bust=1443830915&width=95&-fpm.jpg",
"@id": "2"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/33429868/2/?bust=1443830915&width=500&-x.jpg",
"@id": "2"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/33429868/2/?bust=1443830915&width=300&-pn.jpg",
"@id": "2"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/33429868/2/?bust=1443830915&width=50&-t.jpg",
"@id": "2"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/33429868/3/?bust=1443830916&width=60&-pnt.jpg",
"@id": "3"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/33429868/3/?bust=1443830916&width=95&-fpm.jpg",
"@id": "3"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/33429868/3/?bust=1443830916&width=500&-x.jpg",
"@id": "3"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/33429868/3/?bust=1443830916&width=300&-pn.jpg",
"@id": "3"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/33429868/3/?bust=1443830916&width=50&-t.jpg",
"@id": "3"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/33429868/4/?bust=1504303218&width=60&-pnt.jpg",
"@id": "4"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/33429868/4/?bust=1504303218&width=95&-fpm.jpg",
"@id": "4"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/33429868/4/?bust=1504303218&width=500&-x.jpg",
"@id": "4"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/33429868/4/?bust=1504303218&width=300&-pn.jpg",
"@id": "4"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/33429868/4/?bust=1504303218&width=50&-t.jpg",
"@id": "4"
},

{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/33429868/5/?bust=1504303218&width=60&-pnt.jpg",
"@id": "5"
},

{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/33429868/5/?bust=1504303218&width=95&-fpm.jpg",
"@id": "5"
},

{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/33429868/5/?bust=1504303218&width=500&-x.jpg",
"@id": "5"
},

{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/33429868/5/?bust=1504303218&width=300&-pn.jpg",
"@id": "5"
},

{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/33429868/5/?bust=1504303218&width=50&-t.jpg",
"@id": "5"
}
]
}
},

"id": {
"$t": "33429868"
},
"shelterPetId": {},

"breeds": {

"breed": {
"$t": "Belgian Shepherd / Malinois"
}
},

"name": {
"$t": "Jefke"
},

"sex": {
"$t": "M"
},

"description": {
"$t": "Need a Running Partner? Jefke is Your Guy \n\n\n4-year-old, male, large, Belgian Malinois mix Good with other dogs: Selective Good with children: No Good with cats: No  We rescued Jefke from the local shelter many months ago. He's a good looking Belgian Malinois mix of about 4 years old. He took an extended staycation with one of our wonderful fosters, but due to her work schedule and extended hours, he had to come back to the rescue. He was very protective of his home and didn't welcome the dog sitters with open paws, so this may be an issue that needs to be worked through. He is a VERY active boy, and particularly loves the ball. He was running almost every day with his foster, and he gets so excited when he thinks he's about to go on a run. He actually tries to put his own head through the slip lead! He knows several commands, knows how to use a dog door, loves toys, does well on a leash and is housetrained and crate trained.  Jefke will need to be placed with a strong handler with some breed experience.  We are looking for a home with no children or cats, as he may give chase. He may be OK with another dog given a proper introduction. If you have an active life and you think you have what it takes to bring Jefke into your home and heart, please fill out our online application to get the approval process started. We will not schedule meet & greets without an approved app on file.  Here's the link:  http://savingpawsrescueaz.com/adoption-form/  \n\nAs always, if you are interested in a Saving Paws dog, you must fill out our online application to get the approval process started. We will only schedule meet & greets with an approved application! Here is the link:\nhttp://savingpawsrescueaz.com/adoption-form/\n\nAll staff members are volunteers and are not compensated for their time and expenses. Many of our volunteers juggle family, and full-time careers while volunteering at Saving Paws.  Please be patient as sometimes it takes up to 5 days to process an application."
},

"mix": {
"$t": "yes"
},

"shelterId": {
"$t": "AZ457"
},

"lastUpdate": {
"$t": "2015-10-03T00:08:35Z"
},

"animal": {
"$t": "Dog"
}
},
]
