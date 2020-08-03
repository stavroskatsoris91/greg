import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  isEngilish = true;

  get header() {
    return this.isEngilish ? {
      home: 'HOME',
      about: 'ABOUT',
      story: 'OUR STORY',
      instructors: 'THE INSTRUCTORS',
      horses: 'HORSES',
      riding: 'RIDING',
      treks: 'TREKS',
      lessons: 'LESSONS',
      photos: 'PHOTO SHOOTS',
      picnic: 'PICNICS AND PARTIES',
      safety: 'SAFETY',
      carriage: 'CARRIAGE',
      gallery: 'GALLERY',
      contact: 'CONTACT'
    } : {
        home: 'ΑΡΧΙΚΗ',
        about: 'ΣΧΟΛΗ',
        story: 'ΙΣΤΟΡΙΑ',
        instructors: 'ΕΚΠΑΙΔΕΥΤΕΣ',
        horses: 'ΑΛΟΓΑ',
        riding: 'ΙΠΠΑΣΙΑ',
        treks: 'ΒΟΛΤΕΣ',
        lessons: 'ΜΑΘΗΜΑΤΑ',
        photos: 'ΦΩΤΟΓΡΑΦΙΣΕΙΣ',
        picnic: 'ΠΙΚ ΝΙΚ ΚΑΙ ΠΑΡΤΥ',
        safety: 'ΑΣΦΑΛΕΙΑ',
        carriage: 'ΑΜΑΞΑ',
        gallery: 'ΓΚΑΛΕΡΙ',
        contact: 'ΕΠΙΚΟΙΝΩΝΙΑ'
      }
  }
  get home() {
    return this.isEngilish ? {
      welcome: 'Welcome',
      copy: [
        'Do something different while visiting Spetses! Try horse trekking to see the island’s countryside and enjoy the panoramic views of the sparkling sea from above. We have six great treks for you to choose from.',
        'For those who love horse riding we offer riding lessons in our outdoors arena next to the view of the sea and Spetspoula island. We have private lessons and group lessons if you want to come up with friends.',// Or you can a enjoy a little ride in our arena for 12 euros.',
        'Apart from riding you can enjoy a picnic with your friends or organize kids’ parties with pony rides in the arena.  We also provide our horses for photoshoots for any special occasion.'
      ]
    } : {
        welcome: 'Καλώς ήλθατε',
        copy: [
          'Δοκιμάστε κάτι διαφορετικό όταν επισκεφτείτε τις Σπέτσες! Κάντε μια βόλτα με τα άλογα στο βουνό  για να εξερευνήσετε την εξοχή του νησιού και να απολαύσετε τη θεά της θάλασσας από ψηλά. Υπάρχουν έξι διαφορετικές διαδρομές για να διαλέξετε.',
          'Για αυτούς που αγαπούν την ιππασία, προσφέρουμε μαθήματα σε μια υπαίθρια αρένα με θέα τη θάλασσα και το γειτονικό νησί μας, τη Σπετσοπούλα. Υπάρχουν ιδιαίτερα μαθήματα και ομαδικά εάν θέλετε να έρθετε με φίλους.',
          'Εκτός από την ιππασία, οργανώνουμε πικνίκ και πάρτι για την παρέα σας. Επίσης μπορείτε να νοικιάσετε τα αλόγα μας για φωτογραφίσεις για οποιαδήποτε περίσταση.'
        ]
      }
  }
  get about() {
    return this.isEngilish ? {
      title: 'Our Story',
      copy: [
        'Greg is the owner of Greg\'s Spetses horses which was founded in 2016. He and his siblings grew up very close to nature with many pets and farm animals. His mum has had a love for horses since she was a little girl and started riding from a young age. His Grandfather was a farmer and a carriage driver, and he owned many horses throughout the years. So, although he has been around horses most of his life, it was at the age of thirteen that his passion for horses was ignited, when his dad gifted his mum a foal, Olivia. Shortly after Olivia’s arrival more horses were added to the family.',
        'After that he took it upon himself to become educated on all aspects of horsemanship, the horse’s groundwork and ridden training, their everyday care and welfare, to ensure the horses are happy and healthy on a daily basis. Greg completely trained all the horses himself, following a very thorough process of horsemanship that is as close to the horse’s natural way as possible. This ensures they are confident, reliable, content, but most important of all, safe to be ridden by riders of all ages and abilities.'
      ]
    } : {
        title: 'Η ιστορία μας',
        copy: [
          'Ο Γρηγόρης είναι ο ιδιοκτήτης του Greg’s Spetses Horses  που ιδρύθηκε το 2016. Μεγάλωσε πολύ κοντά στη φύση με πολλά κατοικίδια και ζώα της φάρμας. Η μητέρα του είχε μια αγάπη για τα αλόγα και άρχισε την ιππασία από πολύ μικρή ηλικία. Ο παππούς του ήταν οδηγός αμαξάς και είχε πολλά άλογα όλα τα χρόνια της ζωής του. Παρόλο που ο Γρηγόρης ήταν γύρω από τα αλόγα όλη τη ζωή του, το ενδιαφέρον του μεγάλωσε όταν ο πατέρας του έκανε δώρο στη μητέρα του ένα πουλάρι, την Ολίβια. Λίγο μετά την άφιξη της Ολίβιας περισσότερα άλογα προστέθηκαν στην οικογένεια.',
          'Μετά από αυτό ανέλαβε να εκπαιδευτεί σε όλες τις πτυχές της εκπαίδευσης των αλόγων για την ιππασία αλλά και την καθημερινή τους φροντίδα και ευημερία τους για να βεβαιώσει πως τα άλογα είναι υγιή και χαρούμενα σε καθημερινή βάση. Ο Γρηγόρης έχει εκπαιδεύσει όλα τα άλογα της σχολής μας, ακολουθώντας μια πολύ διεξοδική εκπαίδευση που είναι όσο το δυνατόν πιο κοντά στην φύση του αλόγου. Αυτό διασφαλίζει ότι τα άλογα είναι αξιόπιστα αλλά το πιο σημαντικό από όλα, ασφαλή για αναβάτες όλων των ηλικιών και ικανοτήτων.'
        ]
      };
  }
  get instructors() {
    return this.isEngilish ? {
      title: 'The Instructors',
      instructors: [
        {
          name: 'Greg',
          color: 'red-1',
          description: 'Greg is the owner of Greg’s Spetses Horses. He was raised in Spetses and he is half English, half Greek and speaks both languages fluently. Greg has trained all our horses and he is also the main performer in our new “Greg’s Spetses Horses” Show with his horse, Olivia. As an instructor, He likes to teach his students the importance of building a compassionate relationship with the horses they ride. He’s the trek guide and enjoys showing visitors the beautiful island he grew up in. Apart from our equestrian club, Greg also drives a beautiful horse drawn Victoria carriage which are traditional to the island.'
        },
        {
          name: 'Katerina',
          color: 'purple-3',
          description: 'Katerina is Greek and was raised in Spetses. Growing up on a Greek island she started learning English from a young age and she is now fluent in both languages. She\'s been part of the Greg\'s Spetses Horses team from the beginning. She is a riding instructress, assists on treks and is administrator, taking care of the website, advertising and social media. Katerina performs in the “Greg’s Spetses Horses” show and she loves liberty training with her horse, Robbie. Apart from her love for horses, she’s in her third year of studying for a degree in nursing.'
        },
        {
          name: 'Tracy',
          color: 'yellow-3',
          description: 'Tracy was born and raised in England and she has been living in Spetses for nearly 30 years and speaks fluent both English and Greek. She trained with the British Horse Society in horsemanship and teaching. Tracy also enjoyed show jumping and cross country back in England. Being an instructor, she loves to teach and see the progress of her students.'
        }
      ]
    } : {
        title: 'Οι Εκπαιδευτές',
        instructors: [
          {
            name: 'Γρηγόρης',
            color: 'red-1',
            description: 'Ο Γρηγόρης είναι ο ιδιοκτήτης του Greg’s Spetses Horses. Έχει μεγαλώσει στις Σπέτσες, είναι μισός Άγγλος, μισός Έλληνας και μιλάει άπταιστα και τις δύο γλώσσες. Ο Γρηγόρης έχει εκπαιδεύσει όλα τα άλογά μας και είναι επίσης ο κύριος ερμηνευτής στο νέο μας σόου "Greg\'s Spetses Horses" με το άλογό του, την Ολίβια. Ως εκπαιδευτής, του αρέσει να διδάσκει στους μαθητές του τη σημασία της οικοδόμησης μιας προσωπικής σχέσης με τα άλογα που ιππεύουν. Είναι ο οδηγός στις βόλτες στο βουνό με τα αλόγα και απολαμβάνει να δείχνει στους επισκέπτες το όμορφο νησί στο οποίο μεγάλωσε. Εκτός από τον ιππικό μας όμιλο, ο Γρηγόρης οδηγεί επίσης μια όμορφη βικτωριανή άμαξα  που είναι παραδοσιακή στο νησί μας.'
          },
          {
            name: 'Κατερίνα',
            color: 'purple-3',
            description: 'Η Κατερίνα είναι Ελληνίδα και μεγάλωσε στις Σπέτσες. Μεγαλώνοντας σε ένα ελληνικό νησί άρχισε να μαθαίνει αγγλικά από νεαρή ηλικία και τώρα μιλάει άπταιστα και στις δύο γλώσσες. Ήταν μέλος της ομάδας των Greg\'s Spetses Horses από την αρχή της ίδρυσης. Είναι δασκάλα ιππασίας, βοηθά στις βόλτες στο βουνό με τα αλόγα και είναι διαχειριστής, φροντίζει τον ιστότοπο, τη διαφήμιση και τα κοινωνικά μέσα. Η Κατερίνα ερμηνεύει στο σόου "Greg\'s Spetses Horses" και αγαπά το liberty training με το άλογό της, Ρόμπι. Εκτός από την αγάπη της για τα άλογα, βρίσκεται στο τρίτο έτος σπουδών για πτυχίο νοσηλευτικής.'
          },
          {
            name: 'Tracy',
            color: 'yellow-3',
            description: 'Η Tracy γεννήθηκε και μεγάλωσε στην Αγγλία και ζει στις Σπέτσες για σχεδόν 30 χρόνια και μιλά άπταιστα αγγλικά και ελληνικά. Εκπαιδεύτηκε με τη British Horse Society. Η Tracy απολάμβανε επίσης τα εμπόδια και το cross country στην Αγγλία. Ως εκπαιδευτής, αγαπά να διδάσκει και να βλέπει την πρόοδο των μαθητών της.'
          }
        ]
      };
  }
  get horses() {
    return this.isEngilish ? {
      breed: 'Breed',
      colour: 'Colour',
      age: 'Age',
      height: 'Height',
      year: ' years old',
      rebecca: [
        'Rebecca is the smallest but the head of the herd, she\'s the boss!',
        'She has a strong character, she pulls faces at the other horses to remind them of their place. She is a very safe and relaxed horse. She loves children, she has so much patience and really looks after her rider.'
      ],
      robbie: [
        'Robbie is the gentleman of the family, when Robbie first arrived he was a very unconfident horse, non of the mares like him, which didn\'t help! Throughout his training his true character shone through. He loves his rubs and wants lots of attention. He really enjoys his treks and is a content, safe horse.'
      ],
      nelly: [
        'Nelly is a roan characterized by the white hairs intermingled throughout her bay coat. She has a very calm, quiet nature and is always keen to please her riders.'
      ],
      oscar: [
        'Oscar has a fun, cheeky character and loves his treks. Many recognise Oscar as he was previously part of Harriet\'s team on Hydra.'
      ],
      olivia: [
        'Olivia has been in our family since she was 3months old. She has a very inquisitive character, her curiosity is endless. She loves people and can never resist the chance to lick you.',
        'She is a relaxed horse but always very attentive to her rider.'
      ],
      elina: [
        'Elina is Rebecca’s youngest daughter.',
        'She was a complete surprise, we had no idea Rebecca was in foal again when she arrived.'
      ],
      rosie: [
        'Rosie is a dark bay Thoroughbred/American saddlebred.',
        'She’s the youngest of our family, she was born in our stables and she recently started her riding training.'
      ],
      angel: [
        'Angel is Chestnut with a distinctive blonde mane. She is part Haflinger. Angel is Rebecca\'s daughter.',
        'She became part of our family when she was 2.5 months old. She is in the process of being trained to join us on our rides.'
      ],
      titan: [
        'Titan is the new member of our family. He\'s a dark bay gelding.',
        'He has been sweet, calm and relaxed since the day he arrived. He\'s proving to be brave and fearless on our treks and seems to really connect with his riders.'
      ]
    } : {
        breed: 'Ράτσα',
        colour: 'Χρώμα',
        age: 'Ηλικία',
        height: 'Ύψος',
        years: ' χρονών',
        rebecca: [
          'Η Rebecca είναι η μικρότερη αλλά είναι η επικεφαλής της αγέλης, είναι το αφεντικό!',
          'Έχει ισχυρό χαρακτήρα στα άλλα άλογα για να τους υπενθυμίσει τη θέση τους. Είναι ένα πολύ ασφαλές και χαλαρό άλογο. Αγαπά τα παιδιά, έχει πολύ υπομονή και φροντίζει πραγματικά τον αναβάτη της.'
        ],
        robbie: [
          'Ο Robbie είναι ο κύριος της οικογένειας, όταν έφτασε για πρώτη φορά ήταν ένα άλογο χωρίς καθόλου αυτοπεποίθηση, καμία από τις φοράδες δεν τον συμπαθούσαν, που δεν τον βοήθησε! Καθ \'όλη τη διάρκεια της εκπαίδευσής του, ο αληθινός χαρακτήρας ήρθε στην επιφάνεια. Αγαπά τα χάδια του και θέλει πολλή προσοχή. Απολαμβάνει πραγματικά τις βόλτες του στο βουνό και είναι ένα χαρούμενο, ασφαλές άλογο.'
        ],
        nelly: [
          'Η Nelly είναι ένα roan που χαρακτηρίζεται από τις άσπρες τρίχες που αναμιγνύονται σε όλο το καφέ -μαύρο τρίχωμα της. Έχει μια πολύ ήρεμη, ήσυχη φύση και είναι πάντα πρόθυμη να ευχαριστήσει τους αναβάτες της.'
        ],
        oscar: [
          'Ο Oscar έχει έναν διασκεδαστικό, παιχνιδιάρικο χαρακτήρα και λατρεύει τις βόλτες του στο βουνό. Πολλοί αναγνωρίζουν τον Όσκαρ καθώς ήταν προηγουμένως μέλος της ομάδας του Χάριετ στην Ύδρα.'
        ],
        olivia: [
          'Η Olivia είναι στην οικογένειά μας από τότε που ήταν 3 μηνών. Έχει έναν πολύ αδιάκριτο χαρακτήρα, η περιέργειά της είναι ατελείωτη. Αγαπά τους ανθρώπους και δεν μπορεί ποτέ να αντισταθεί στο να σε γλείφει.',
          'Είναι ένα χαλαρό άλογο αλλά πάντα πολύ προσεκτική στον αναβάτη της.'
        ],
        elina: [
          'Η Elina είναι η μικρότερη κόρη της Ρεμπέκα. Ήταν μια απόλυτη έκπληξη, δεν είχαμε ιδέα ότι η Ρεμπέκα ήταν πάλι έγκυος όταν έφτασε.'
        ],
        rosie: [
          'Η Rosie είναι ένα μαύρο άλογο ράτσας Thoroughbred/American saddlebred.',
          'Είναι η νεότερη της οικογένειάς μας, γεννήθηκε στους στάβλους μας και ξεκίνησε πρόσφατα την εκπαίδευση της στην ιππασία.'
        ],
        angel: [
          'Η Angel είναι ένα κάστανο άλογο με μια ξεχωριστή ξανθιά χαίτη. Ένα μέρος της ράτσας της είναι Haflinger. Η Angel είναι κόρη της Rebecca.',
          'Έγινε μέλος της οικογένειάς μας όταν ήταν 2,5 μηνών. Βρίσκεται στη διαδικασία της εκπαίδευσης της για να συμμετάσχει στις βόλτες μας στο βουνό.'
        ],
        titan: [
          'Ο Titan είναι το νέο μέλος της οικογένειάς μας. Ήταν γλυκός, ήρεμος και χαλαρός από την ημέρα που έφτασε',
          'Αποδεικνύεται ότι είναι γενναίος και άφοβος στις βόλτες μας και φαίνεται να συνδέεται πραγματικά με τους αναβάτες του.'
        ]
      }
  }
  get treks() {
    return this.isEngilish ? {
      photos: 'Photos',
      trek: 'Trek',
      min: 'min',
      hour: 'h',
      hourFull: 'hour',
      horse: 'horse',
      level1: 'All levels',
      level2: 'level experienced',
      info: '*The return journey is along the same route in all treks. Any additional time required will be charged at €12.30 per half hour.',
      trek1: {
        title2: 'Coastal Road',
        text: 'From the stables we ride a 20 minute outbound trek along the high coastal road, over looking the beautiful view of the neighbouring private Island Spetsopoula. Break for photographs.'
      },
      trek2: {
        title2: 'Panagia Elonas',
        text: 'To Panagia Elonas (the Virgin Mary of Elonas). From the stables at the area known as \'Zastano\', we travel along the coastal road (1.5km). Then we turn off on to the country tracks through mountains to the beautiful church of Panagia Elonas. This outbound journey will take 40 minutes. On arrival we will rest for 20 minutes for refreshments (not included) and an opportunity to take photographs of the fantastic views.'
      },
      trek3: {
        title2: 'Hara Estate',
        text: 'To The Hara Estate. From the stables we ride a 55 minute outbound trek, travelling along the coastal road (1.5km) then we turn off on to the country track through the mountains. Along the route we will stop off at Panagia Elonas (10 mins) for photographs if wished, then we will head to The Hara Estate. Here we will take a 15 minute rest for photographs and refreshments (not included).'
      },
      trek4: {
        title2: 'Hunters\' Refuge',
        text: 'To Hunters\' Refuge. From the stables we ride a 60 minute outbound trek, along the coastal road (1.5km) then we turn off on to the country tracks through the mountains. We will make a stop on the hill of  Elonas (10 mins) if wished and also a stop at The Hara Estate (10 mins) for an opportunity to take photographs of the gorgeous views. We ride through pine forests to reach the Hunters\' Refuge where we will rest (15 mins) for photographs and refreshments (not included).'
      },
      trek5: {
        title2: 'Panagia Daskalaki',
        text: 'To Panagia Daskalaki (Virgin Mary of Daskalaki). From the stables we ride a 75 minute outbound trek, along the coastal road (1.5 km) then we turn off on to the country tracks through the mountains. Along the way we will make stops at Panagia Elonas (10 mins), The Hara Estate (5 mins) and the Hunters\' refuge (5 mins) for photograph opportunities if wished. At our destination we will rest (20 mins) for refreshments (not included) and an opportunity to photograph the stunning views! This may be the most forested area of Spetses,  it offers the wonderful natural beauty of the pines, as well as a beautiful view.'
      },
      trek6: {
        title2: 'Profitis Ilias',
        text: 'To Profitis Ilias (the Prophet Elias, or Elijah. From the stables we ride a 1 hour 30 minute trek, going along the coastal road (1.5km) then turning off on to the country tracks through the mountains. Along the way we will visit Panagia Elonas (15 mins), The Hara Estate (5 mins) and The Hunters\' Refuge (5 mins). On reaching Panagia Daskalaki we will rest (20 mins), to take in the stunning scenery and an opportunity for photographs and refreshments (not included). At the destination Profitis Ilias, the highest point of the Island, there will chance to rest (15 mins), for refreshments (not included) and for gorgeous photographs of the most fantastic views.'
      }
    } : {
        photos: 'Φωτογραφίες',
        trek: 'Βόλτα',
        min: 'λ',
        hour: 'ω',
        hourFull: 'Ώρα',
        horse: 'άλογο',
        level1: 'Όλα τα επίπεδα',
        level2: 'έμπειρος',
        info: '*Η επιστροφή σε όλες τις βόλτες είναι η ιδιά διαδρομή καθώς δεν υπάρχει άλλο διαθέσιμο μονοπάτι. Τυχόν επιπλέον χρόνος που απαιτείται χρεώνεται στα 12,30 € ανά μισή ώρα.',
        trek1: {
          title2: 'Παράκτιος δρόμος',
          text: 'Από τους στάβλους μας ακολουθούμε μια 20λεπτη διαδρομή στον υψηλό παραλιακό δρόμο, κοιτάζοντας την όμορφη θέα του γειτονικού ιδιωτικού νησιού Σπετσοπούλα. Διάλειμμα για φωτογραφίες.'
        },
        trek2: {
          title2: 'Παναγιά Έλωνα',
          text: 'Από τους στάβλους μας στην περιοχή γνωστή ως «Ζαστάνο», ιππεύουμε  κατά μήκος του παραλιακού δρόμου (1,5 χλμ.). Στη συνέχεια, στρίβουμε στα μονοπάτια μέσα από τα βουνά στην όμορφη εκκλησία της Παναγίας Έλωνας. Αυτή η διαδρομή μέχρι την εκκλησιά θα διαρκέσει 40 λεπτά. Κατά την άφιξη θα ξεκουραστούμε για 20 λεπτά και θα έχετε την ευκαιρία να τραβήξετε φωτογραφίες με τη φανταστική θέα και τα άλογα και στη συνέχεια θα ξεκινήσουμε για την επιστροφή.'
        },
        trek3: {
          title2: 'Η Χαρά',
          text: 'Από τους στάβλους κάνουμε μια διαδρομή 55 λεπτών, ιππεύοντας κατά μήκος του παραλιακού δρόμου (1,5 χλμ.) Και μετά στρίβουμε στα μονοπάτια του βουνού. Κατά τη διάρκεια της διαδρομής θα σταματήσουμε στην Παναγία Έλωνα (10 λεπτά) για φωτογραφίες εάν το επιθυμείτε, στη συνέχεια θα κατευθυνθούμε στο κτήμα της Χαράς. Εκεί θα ξεκουραστούμε 15 λεπτά, θα σας τραβήξουμε φωτογραφίες και θα συνεχίσουμε για την επιστροφή.'
        },
        trek4: {
          title2: 'Συνάντηση κυνηγών',
          text: 'Από τους στάβλους ακολουθούμε μια διαδρομή 60 λεπτών, κατά μήκος του παραλιακού δρόμου (1,5 χιλιόμετρο) και μετά στρίβουμε στα μονοπάτια του βουνού. Θα κάνουμε μια στάση στην εκκλησιά της Έλωνας (10 λεπτά) αν το επιθυμείτε και επίσης μια στάση στο κτήμα της χαράς (10 λεπτά) για μια ευκαιρία να τραβήξουμε φωτογραφίες με την υπέροχη θέα. Ιππεύοντας μέσα από πευκοδάση θα φτάσουμε στο Καταφύγιο Κυνηγών όπου θα ξεκουραστούμε (15 λεπτά) για φωτογραφίες και θα συνεχίσουμε για την επιστροφή.'
        },
        trek5: {
          title2: 'Παναγιά Δασκαλάκη',
          text: 'Από τους στάβλους ακολουθούμε ένα εξερχόμενο ταξίδι διάρκειας 75 λεπτών, κατά μήκος του παραλιακού δρόμου (1,5 χλμ.) Και μετά στρίβουμε στα μονοπάτια του βουνού. Στην πορεία θα κάνουμε στάσεις στην Παναγία Έλωνα (10 λεπτά), στο κτήμα Χαρά (5 λεπτά) και στο καταφύγιο των Κυνηγών (5 λεπτά) για ευκαιρίες για φωτογραφίες, εάν το επιθυμείτε. Στον προορισμό μας θα ξεκουραστούμε (20 λεπτά) και μια ευκαιρία να φωτογραφίσετε την εκπληκτική θέα! Αυτή μπορεί να είναι η πιο δασώδης περιοχή των Σπετσών, προσφέρει την υπέροχη φυσική ομορφιά των πεύκων, καθώς και μια υπέροχη θέα. Υστέρα θα συνεχίσουμε για την επιστροφή.'
        },
        trek6: {
          title2: 'Προφήτης Ηλίας',
          text: 'Από τους στάβλους ιππεύουμε ακολουθώντας τον παραλιακό δρόμο (1,5 χλμ.) Και μετά στρίβουμε για τα μονοπάτια που διασχίζουν το βουνό (1 ώρα και 30 λεπτά). Στην πορεία θα επισκεφθούμε την Παναγία Έλωνα (15 λεπτά), το κτήμα Χαρά (5 λεπτά) και το καταφύγιο των κυνηγών (5 λεπτά). Φτάνοντας στην Παναγία Δασκαλάκη θα ξεκουραστούμε (20 λεπτά), για να απολαύσουμε το εκπληκτικό τοπίο και μια ευκαιρία για φωτογραφίες. Στον προορισμό του Προφήτη Ηλία, το ψηλότερο σημείο του νησιού, θα έχετε την ευκαιρία να ξεκουραστείτε (15 λεπτά) και για υπέροχες φωτογραφίες από το πιο ψηλό σημείο του νησιού. Υστέρα θα συνεχίσουμε για την επιστροφή.'
        }
      };
  }
  get lessons() {
    return this.isEngilish ? {
      title: 'Horse Riding Lessons',
      lessons: [
        'Choose a private lesson or come with friends (up to 3-4 riders).',// Or just try a little ride in our outdoors arena next to the sea view for only 12 euros!',
        'Lessons are arranged by appointment.',
        'Call or send us an email!'
      ],
      extraInfo: [
        'Please arrive at least five minutes before your lesson start time. Lessons will not be extended if you are late as this will affect the following student.',
        'If upon arrival you decide you do not wish to ride you will be required to pay for the number of horses originally booked as they are prepared and saddled waiting specifically for you. (exception due to sickness)'
      ],
      lessonPhotosInfo1: 'Fun grooming Robbie before the lesson',
      lessonPhotosInfo2: 'Trotting on Robbie',
      lessonPhotosInfo3: 'First steps learning to trot on Rebecca',
      lessonPhotosInfo4: 'Our students dropping in to say hello to the horses'
    } : {
        title: 'Μαθήματα Ιππασίας',
        lessons: [
          'Επιλέξτε ένα ιδιωτικό μάθημα ή ελάτε με φίλους (έως 3-4 αναβάτες).', 'Τα μαθήματα οργανώνονται κατόπιν ραντεβού.', 'Καλέστε ή στείλτε μας ένα email!'
        ],
        extraInfo: [
          'Φροντίστε να είστε στους στάβλους τουλάχιστον πέντε λεπτά πριν από την ώρα έναρξης του μαθήματος. Τα μαθήματα δεν θα επεκταθούν εάν αργήσετε, καθώς αυτό θα επηρεάσει τον επόμενο μαθητή.',
          'Εάν κατά την άφιξη αποφασίσετε ότι δεν θέλετε να κάνετε ιππασία, θα πρέπει να πληρώσετε για τον αριθμό των αλόγων που είχατε αρχικά ζητήσει, καθώς είναι έτοιμα με τη σέλα και θα περιμένουν ειδικά για εσάς. (εξαίρεση λόγω ασθένειας/αδιαθεσίας).'
        ],
        lessonPhotosInfo1: 'Τα κορίτσια βουρτσίζουν το Robbie πριν το μάθημα',
        lessonPhotosInfo2: 'Ιππασία με τον Robbie',
        lessonPhotosInfo3: 'Μαθαίνοντας rising trot με την Rebecca',
        lessonPhotosInfo4: 'Οι μαθητές μας περνώντας από τη σχολή να χαιρετήσουν τα αλόγα'

      };
  }
  get photoshoots() {
    return this.isEngilish ? {
      title: 'Photo Shoots',
      photoshoots: [
        'Want to a try something different for a special occasion?',
        'Why not hire our horses to make your wedding day, proposal, anniversary, any day even more unique and unforgettable?',
        'Choose the horses you like and be ready for a beautiful photoshoot next to the view of the sea or mountain while watching the sunset.'
      ]
    } : {
        title: 'Φωτογραφίσεις',
        photoshoots: [
          'Θέλετε να δοκιμάσετε κάτι διαφορετικό για μια ειδική περίσταση;',
          'Γιατί να μην νοικιάσετε τα άλογά μας για να κάνετε την ημέρα του γάμου σας, την πρόταση γάμου, την επέτειο, οποιαδήποτε μέρα ακόμα πιο μοναδική και αξέχαστη;',
          'Επιλέξτε τα άλογα που σας αρέσουν και ετοιμαστείτε για μια όμορφη φωτογράφιση δίπλα στη θέα της θάλασσας ή στο βουνό, βλέποντας το ηλιοβασίλεμα.'
        ]
      };
  }
  get picnics() {
    return this.isEngilish ? {
      title:'Picnics And Parties',
      picnics : [
        'Are you looking for a beautiful area with plenty of space for a children\'s party with the extra excitement of horse riding too?',
        'Or organize a different picnic for you and your friends or family?',
        ' Contact us for more details.'
      ]
    } : {
      title:'Picnics And Parties',
      picnics:[
        'Ψάχνετε για μια όμορφη περιοχή με άφθονο χώρο για παιδικό πάρτυ με τον επιπλέον ενθουσιασμό της ιππασίας;',
        'Ή θέλετε οργανώστε ένα διαφορετικό πικνίκ για εσάς και τους φίλους σας ή την οικογένειά σας;',
        'Επικοινωνήστε μαζί μας για περισσότερες λεπτομέρειες.'

      ]
    };
  }
  get safety() {
    return this.isEngilish ? {
      safety : [{
        title: 'Your safety is our concern',
        list: [
          'Safety Helmets',
          'Modern up-to-date equipment',
          'Specialist child stirrups',
          'First aid kit carried',
          'Certified First Aider',
          'Rider ability assessment',
          'Treks matched to experience'
        ],
        text: [
          'Riding at any standard has inherent risk that you may fall off and could be injured. Please note that by using my service you accept that risk and agree that Greg\'s Spetses Horses will not be liable for injury or damage to property.',
          'We therefore recommend that you ensure that you have adequate medical cover with your travel insurance. I also reserve the right to refuse accepting a booking if in my opinion the rider would be putting themselves, others or my horses at risk due to physical disability, behavioral or attitude issues, or appear to be under the influence of alcohol or drugs.'
        ]
      },
      // {
      //   title:'Do\'s and Don\'ts',
      //   list:[
      //     'Do bring a small rucksack with water and snacks for longer treks.',
      //     'Do wear sunblock because even in Spring and Autumn you can burn easily.',
      //     'Do wear longer shorts or leggings even in the Summer so you don\'t get sore legs from chaffing on the saddle.',
      //     'Do spray yourself with mosquito repellant as a precaution.',
      //     'You won\'t need a sun hat or cap because you will be wearing a safety helmet!',
      //     'Do not wear flipflops or strappy sandals (it is not safe footwear for riding and you may have to dismount and walk in places).',
      //     'Don\'t forget your camera!'
      //   ],
      //   text:[]
      // }
      {
        title: 'Rules and Regulations',
        list: [
          'Always arrive at least five minutes before your lesson start time. Lessons will not be extended as this will affect the following student.',
          'If upon arrival you decide you do not wish to ride you will be required to pay for the number of horses originally booked as they are prepared and saddled waiting specifically for you. (exception would be if you can’t ride due to sickness)',
          'No feeding the horses or carrying treats and bags near the arena during the lessons. Horses will only be fed when the instructors allow you to do so.',
          'Helmets MUST be worn (no exceptions). All riders must wear long trousers or leggings and appropriate closed shoes or boots.',
          'For your own safety and that of the riders, children must not shout or run around close to the arena fencing.',
          'Children should not be left unsupervised before or after their lessons. We are only responsible for your child for the duration of their lesson'
        ],
        text: []
      }
      ]
    } : {
      safety : [{
        title: 'Η ασφάλειά σας είναι η προτεραιότητα μας',
        list: [
          'Κράνη ασφαλείας',
          'Σύγχρονος εξοπλισμός',,
          'Ειδικοί παιδικοί αναβολείς',
          'Κουτί πρώτων βοηθειών',
          'Πιστοποιημένα άτομα πρώτων βοηθειών',
          'Αξιολόγηση ικανότητας αναβάτη',
          'Βόλτες που ταιριάζουν με την εμπειρία',
        ],
        text: [
          'Η ιππασία με οποιοδήποτε τρόπο έχει εγγενή κίνδυνο να πέσετε ή να τραυματιστείτε. Λάβετε υπόψη ότι με τη χρήση της υπηρεσίας μου αποδέχεστε αυτόν τον κίνδυνο και συμφωνείτε ότι το Greg\'s Spetses Horses δεν θα ευθύνεται για τραυματισμό ή ζημιά σε περιουσία.',
          'Προτείνουμε λοιπόν να διασφαλίσετε ότι έχετε επαρκή ιατρική κάλυψη με την ταξιδιωτική σας ασφάλιση. Διατηρώ επίσης το δικαίωμα να αρνηθώ την αποδοχή μιας κράτησης εάν κατά τη γνώμη μου ο αναβάτης θέτει τον εαυτό του, τους άλλους ή τα άλογά μου σε κίνδυνο λόγω σωματικής αναπηρίας ή ζητημάτων συμπεριφοράς ή φαίνεται να βρίσκονται υπό την επήρεια αλκοόλ ή ναρκωτικών.'
        ]
      },
      // {
      //   title:'Do\'s and Don\'ts',
      //   list:[
      //     'Do bring a small rucksack with water and snacks for longer treks.',
      //     'Do wear sunblock because even in Spring and Autumn you can burn easily.',
      //     'Do wear longer shorts or leggings even in the Summer so you don\'t get sore legs from chaffing on the saddle.',
      //     'Do spray yourself with mosquito repellant as a precaution.',
      //     'You won\'t need a sun hat or cap because you will be wearing a safety helmet!',
      //     'Do not wear flipflops or strappy sandals (it is not safe footwear for riding and you may have to dismount and walk in places).',
      //     'Don\'t forget your camera!'
      //   ],
      //   text:[]
      // }
      {
        title: 'Κανόνες και κανονισμοί',
        list: [
          'Πάντα φθάνετε τουλάχιστον πέντε λεπτά πριν από την ώρα έναρξης του μαθήματος. Τα μαθήματα δεν θα επεκταθούν, καθώς αυτό θα επηρεάσει τον επόμενο μαθητή.',
          'Εάν κατά την άφιξη αποφασίσετε ότι δεν θέλετε να κάνετε ιππασία, θα πρέπει να πληρώσετε για τον αριθμό των αλόγων που είχαν αρχικά ζητήσει, καθώς είναι έτοιμα με τη σέλα και περιμένουν ειδικά για εσάς. (εξαίρεση θα ήταν αν δεν μπορείτε να ιππεύσετε λόγω ασθένειας/αδιαθεσίας)',
          'Απαγορεύεται το τάισμα των αλόγων ή η μεταφορά λιχουδιών και τσαντών κοντά στην αρένα κατά τη διάρκεια των μαθημάτων. Τα άλογα θα ταΐζονται μόνο όταν οι εκπαιδευτές σας επιτρέπουν να το κάνετε.',
          'ΠΡΕΠΕΙ να φοράτε κράνη (χωρίς εξαιρέσεις). Όλοι οι αναβάτες πρέπει να φορούν μακρύ παντελόνι ή κολάν και κατάλληλα κλειστά παπούτσια ή μπότες.',
          'Για τη δική σας ασφάλεια και για αυτή των αναβατών, τα παιδιά δεν θα πρέπει να φωνάζουν ή να τρέχουν κοντά στην περίφραξη της αρένας.',
          'Τα παιδιά δεν πρέπει να μένουν χωρίς επίβλεψη πριν ή μετά τα μαθήματα. Είμαστε υπεύθυνοι για το παιδί σας μόνο κατά τη διάρκεια του μαθήματος.'
        ],
        text: []
      }
      ]
    }
  }
  get carriage() {
    return this.isEngilish ? {
      title:'Horse Carriage Tours',
      text:[
        'Horse carriages are one of our island’s most well known traditions. Don’t miss a tour with a beautiful Victoria carriage and the opportunity to learn about Spetses history.',
        'Call us for bookings. Prices depend on the duration of your tour.'
      ]
    } : {
      title:'Περιηγήσεις με άμαξα',
      text:[
        'Οι άμαξες είναι μια από τις πιο ξακουστές παραδόσεις του νησιού μας. Μην χάσετε την ευκαιρία για μια περιήγηση με μια όμορφη βικτωριανή άμαξα και την ευκαιρία να μάθετε για την ιστορία των Σπετσών.',
        'Καλέστε μας για κρατήσεις. Οι τιμές εξαρτώνται από τη διάρκεια της βόλτας σας.'
      ]
    };
  }
  get contact() {
    return this.isEngilish ? {
      title:'Contact Us',
      tsncs : 'Payment ts&cs',
      safety : 'Safety',
      field : {
        name:'Name',
        email:'Email',
        contactNumber:'Contact Number (+Country Code)',
        date:'Date',
        hour:'Hour',
        mins:'Mins',
        riding:'Riding',
        riders:'Riders',
        age:'Age',
        height:'Height (m)',
        weight:'Weight (kg)',
        experience: 'Experence',
        add:'Add Rider',
        paymentMethod:'Payment Method',
        message:'Message',
        submit:'Submit'
      },
      requiredField: 'Required field',
      requiredName: 'Name is required',
      invalidEmail: 'Invalid email',
      paymentsTitle:'Payments',
      paymentsText : [
        'Payment can be made by CASH on the day',
        'or Bank transfer in advance',
        'NO Credit/Debit cards accepted due to our position in the countryside with no electricity/secure internet',
        'On booking please confirm how you wish to pay.',
        'In the event of cancellation please try to inform us at least 48hrs in advance.'
      ],
      levels : [
        'Novice',
        'Intermediate',
        'Advanced'
      ],
      payments : ['Cash on the Day', 'Bank Transfer'],
      cancellationTitle : 'Cancellation Policy',
      cancellationText : [
        'In the event of cancellation by the customer:',
        '- More than 48 hours notice: full refund.',
        '- Less than 24 hours notice: you may be charged half the price.',
        '- Last minute cancelation: you will be charged the full price depending on the circumstance.',
        '',
        'If upon arrival you decide you do not wish to ride you will be required to pay for the number of horses originally booked as they are prepared and saddled waiting specifically for you. (exception would be if you can’t ride due to sickness)',
        '',
        'In event of cancellation by Greg\'s Spetses Horses, for example:',
        '- Due to illness of trek guide',
        '- Illness of horses',
        '- Adverse weather conditions (at discretion of Greg\'s Spetses Horses)',
        'Then a full refund will be given, or alternative dates agreed subject to availability.',
        '',
        'It is a condition of your booking that you accept that Greg\'s Spetses Horses is entitled to require you to dismount or to refuse to allow you to ride if for any reason, including your inability, behaviour or health, they consider that you may endanger the safety or welfare of any person or the horses. If so required you have no claim and will not be entitled to any compensation or refund.',
      ]
    } : {
      title:'Επικοινώνησε μαζί μας',
      tsncs : 'Όροι και Προϋποθέσεις Πληρωμών',
      safety : 'Ασφάλεια',
      field : {
        name:'Όνομα',
        email:'Email',
        contactNumber:'Τηλέφωνο Επικοινωνίας (+Κωδικός Xώρας)',
        date:'Ημερομηνία',
        hour:'Ώρα',
        mins:'Λεπτά',
        riding:'Ιππασία',
        riders:'Αναβάτες',
        age:'Ηλικία',
        height:'Ύψος (μ)',
        weight:'Βάρος (κιλά)',
        experience: 'Εμπειρία',
        add:'Προσθήκη Αναβάτη',
        paymentMethod:'Τρόπος Πληρωμής',
        message:'Μήνυμα',
        submit:'Υποβολή'
      },
      requiredField: 'Υποχρεωτικό πεδίο',
      requiredName: 'Υποχρεωτικό όνομα',
      invalidEmail: 'Μη έγκυρο email',
      paymentsTitle:'Αγορές',
      paymentsText : [
        'Η πληρωμή μπορεί να γίνει με ΜΕΤΡΗΤΑ την ημέρα κράτησης',
        'ή τραπεζική μεταφορά εκ των προτέρων',
        'ΟΧΙ πιστωτικές / χρεωστικές κάρτες αποδεκτές λόγω της θέσης μας στην ύπαιθρο χωρίς ηλεκτρικό ρεύμα / ασφαλές Internet',
        'Κατά την κράτηση, επιβεβαιώστε τον τρόπο πληρωμής.',
        'Σε περίπτωση ακύρωσης, προσπαθήστε να μας ενημερώσετε τουλάχιστον 48 ώρες νωρίτερα.'
      ],
      levels : [
        'Αρχάριο',
        'Μέτριο',
        'Προχωρημένο'
      ],
      payments : ['Μετρητά την ημέρα κράτησης', 'Τραπεζική Mεταφορά'],
      cancellationTitle : 'Πολιτική Ακύρωσης Κράτησης',
      cancellationText : [
        'Σε περίπτωση ακύρωσης από τον πελάτη:',
        '- Πάνω από 48 ώρες ειδοποίηση: πλήρης επιστροφή χρημάτων.',
        '- Λιγότερο από 24 ώρες ειδοποίηση: ενδέχεται να χρεωθείτε στη μισή τιμή.',
        '- Ακύρωση τελευταίας στιγμής: θα χρεωθείτε με την πλήρη τιμή ανάλογα με την περίσταση.',
        '',
        'Εάν κατά την άφιξη αποφασίσετε ότι δεν θέλετε να κάνετε ιππασία, θα πρέπει να πληρώσετε για τον αριθμό των αλόγων που είχαν αρχικά κρατηθεί, καθώς είναι έτοιμα με τη σέλα και περιμένουν ειδικά για εσάς. (εξαίρεση θα ήταν αν δεν μπορείτε να ιππεύσετε λόγω αδιαθεσίας/ασθένειας)',
        '',
        'Σε περίπτωση ακύρωσης από το Greg\'s Spetses Horses, για παράδειγμα:',
        '- Λόγω ασθένειας των εκπαιδευτών',
        '- Ασθένεια των αλόγων',
        '- Δυσμενείς καιρικές συνθήκες (κατά την κρίση του Greg\'s Spetses Horses)',
        'Τότε θα δοθεί πλήρης επιστροφή χρημάτων ή εναλλακτικές ημερομηνίες που θα συμφωνηθούν βάσει διαθεσιμότητας.',
        '',
        'Είναι προϋπόθεση της κράτησής σας ότι αποδέχεστε ότι το Greg\'s Spetses Horses δικαιούται να σας ζητήσει να κατεβείτε ή να αρνηθείτε να σας επιτρέψει να ιππεύσετε εάν για οποιονδήποτε λόγο, συμπεριλαμβανομένης της ανικανότητας, της συμπεριφοράς ή της υγείας σας, θεωρούν ότι ενδέχεται να θέσετε σε κίνδυνο την ασφάλεια ή ευημερία οποιουδήποτε ατόμου ή των αλόγων. Εάν απαιτείται, δεν έχετε καμία αξίωση και δεν θα δικαιούστε αποζημίωση ή επιστροφή χρημάτων.',
      ]
    };
  }
  get thankYou() {
    return this.isEngilish ? {
      title:'Thank you!',
      text:['We will be in contact with you shortly 😊']
    } : {
      title:'Σας Ευχαριστούμε!',
      text:['Θα επικοινωνήσουμε μαζί σας σύντομα 😊']
    };
  }

  get footer() {
    return this.isEngilish ?{
      title: 'Where to Find Us',
      location: 'Spetses, 180 50',
      time:'7am - 8pm',
      info:[
        'For any activities you are intrested in doing you need to make an appointment first.','',
        'But during summer months we are open all day from 8am to 9pm so you can visit the stables,',
        'meet the horses or try a little ride in our arena.'
      ]
    }:{
      title: 'Που θα μας βρείτεs',
      location: 'Σπέτσες, 180 50',
      time:'7πμ - 8μμ',
      info:[
        'Για όλες τις δραστηριότητες πρέπει να κλείσετε ραντεβού .',
        'Αλλά το καλοκαίρι η σχολή είναι ανοιχτά από τις 4.00μμ μέχρι τις 9.00μμ',
        'και μπορείτε να μας επισκεφθείτε για να γνωρίσετε τα άλογα και να δοκιμάσετε την ιππασία.'
      ]
    }
  }
}
