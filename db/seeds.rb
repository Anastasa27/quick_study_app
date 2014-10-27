# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

anastasia = User.create(username:'Anastasia', password:'2777')

sample_stack = Stack.create(category:'Lost In Transaction')

card1 = Card.create(question:'Saudade(Portuguese)',answer:'the feeling of missing something you love while knowing that its likelihood of return is unknowable and entirely left to fate')

card2 = Card.create(question:'Ya’aburnee(Arabic)',answer:'“You bury me,” a declaration of one’s hope that they’ll die before another person because of how difficult it would be to live without them')

card3 = Card.create(question:'Schadenfreude(German)',answer:'the feeling of pleasure derived by seeing another’s misfortune')

card4 = Card.create(question:'L’appel du vide(French)',answer:'“The call of the void”, used to describe the instinctive urge to jump from high places')

card5 = Card.create(question:'Wabi-Sabi(Japanese)',answer:'finding beauty within the imperfections of life and accepting peacefully the natural cycle of growth and decay')

card6 = Card.create(question:'Tartle(Scottish)',answer:'The act of hesitating while introducing someone because you’ve forgotten their name')

card7 = Card.create(question:'Jayus(Indonesian)',answer:'A joke so poorly told and so unfunny that one cannot help but laugh')

card8 = Card.create(question:'Mamihlapinatapei(Yagan)',answer:'The wordless, yet meaningful look shared by two people who both desire to initiate something but are both reluctant to start')

card9 = Card.create(question:'Duende(Spanish)',answer:'The mysterious power that a work of art has to deeply move a person')

card10 = Card.create(question:'Gigil(Tagalog)',answer:'The urge to pinch or squeeze something that is unbearably cute')

sample_stack.user_id = anastasia.id

sample_stack.save

card1.stack_id = sample_stack.id

card1.save

card2.stack_id = sample_stack.id

card2.save

card3.stack_id = sample_stack.id

card3.save

card4.stack_id = sample_stack.id

card4.save

card5.stack_id = sample_stack.id

card5.save

card6.stack_id = sample_stack.id

card6.save

card7.stack_id = sample_stack.id

card7.save

card8.stack_id = sample_stack.id

card8.save

card9.stack_id = sample_stack.id

card9.save

card10.stack_id = sample_stack.id

card10.save


