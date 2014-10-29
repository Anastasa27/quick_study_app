# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all
Stack.delete_all
Card.delete_all
#user 1#
anastasia = User.create(username:'Anastasia', password:'2777', password_confirmation:'2777')

sample_stack = Stack.create(category:'Lost In Translation')

card1 = Card.create(question:'Saudade(Portuguese)',answer:'the feeling of missing something you love while knowing that its likelihood of return is unknowable and entirely left to fate')

card2 = Card.create(question:'Ya’aburnee(Arabic)',answer:'“You bury me,” a declaration of one’s hope that they’ll die before another person because of how difficult it would be to live without them')

card3 = Card.create(question:'Schadenfreude(German)',answer:'the feeling of pleasure derived by seeing another’s misfortune')

card4 = Card.create(question:'L’appel du vide(French)',answer:'“The call of the void”, used to describe the instinctive urge to jump from high places')

card5 = Card.create(question:'Wabi-Sabi(Japanese)',answer:'finding beauty within the imperfections of life and accepting peacefully the natural cycle of growth and decay')

card6 = Card.create(question:'Tartle(Scottish)',answer:'the act of hesitating while introducing someone because you’ve forgotten their name')

card7 = Card.create(question:'Jayus(Indonesian)',answer:'a joke so poorly told and so unfunny that one cannot help but laugh')

card8 = Card.create(question:'Mamihlapinatapei(Yagan)',answer:'the wordless, yet meaningful look shared by two people who both desire to initiate something but are both reluctant to start')

card9 = Card.create(question:'Duende(Spanish)',answer:'the mysterious power that a work of art has to deeply move a person')

card10 = Card.create(question:'Gigil(Tagalog)',answer:'the urge to pinch or squeeze something that is unbearably cute')

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

# user 2

isabella = User.create(username:'Isabella', password:'1107', password_confirmation:'1107')

sample_stack2 = Stack.create(category:'Awesome Books/Authors')

icard1 = Card.create(question:'"The Famished Road"',answer:'Ben Okri')

icard2 = Card.create(question:'"NW"',answer:'Zadie Smith')

icard3 = Card.create(question:'"Lolita"',answer:'Vladimir Nabokov')

icard4 = Card.create(question:'"TransAtlantic"',answer:'Colum McCann')

icard5 = Card.create(question:'"Love in the Time of Cholera"',answer:'Gabriel García Márquez')

icard6 = Card.create(question:'"Americanah"',answer:'Chimamanda Ngozi Adichie')

icard7 = Card.create(question:'"A Visit From the Goon Squad"',answer:'Jennifer Egan')

icard8 = Card.create(question:'"Unaccustomed Earth"',answer:'Jhumpa Lahiri')

icard9 = Card.create(question:'"The Amazing Adventures of Kavalier & Clay"',answer:'Michael Chabon')

icard10 = Card.create(question:'"The Left Hand of Darkness"',answer:'Ursula K. Le Guin')

sample_stack2.user_id = isabella.id

sample_stack2.save

icard1.stack_id = sample_stack2.id

icard1.save

icard2.stack_id = sample_stack2.id

icard2.save

icard3.stack_id = sample_stack2.id

icard3.save

icard4.stack_id = sample_stack2.id

icard4.save

icard5.stack_id = sample_stack2.id

icard5.save

icard6.stack_id = sample_stack2.id

icard6.save

icard7.stack_id = sample_stack2.id

icard7.save

icard8.stack_id = sample_stack2.id

icard8.save

icard9.stack_id = sample_stack2.id

icard9.save

icard10.stack_id = sample_stack2.id

icard10.save

#user 3

desmond = User.create(username:'Desmond', password:'0105', password_confirmation:'0105')

sample_stack3 = Stack.create(category:'African Countries/Capitols')

dcard1 = Card.create(question:'Mozambique',answer:'Maputo')

dcard2 = Card.create(question:'South Africa',answer:'Pretoria')

dcard3 = Card.create(question:'Zambia',answer:'Lusaka')

dcard4 = Card.create(question:'Morocco',answer:'Rabat')

dcard5 = Card.create(question:'Senegal',answer:'Dakar')

dcard6 = Card.create(question:'Angola',answer:'Luongo')

dcard7 = Card.create(question:'Burkina Faso',answer:'Ouagadougou')

dcard8 = Card.create(question:'Libya',answer:'Tripoli')

dcard9 = Card.create(question:'Mali',answer:'Bamako')

dcard10 = Card.create(question:'Uganda',answer:'Kampala')

sample_stack3.user_id = desmond.id

sample_stack3.save

dcard1.stack_id = sample_stack3.id

dcard1.save

dcard2.stack_id = sample_stack3.id

dcard2.save

dcard3.stack_id = sample_stack3.id

dcard3.save

dcard4.stack_id = sample_stack3.id

dcard4.save

dcard5.stack_id = sample_stack3.id

dcard5.save

dcard6.stack_id = sample_stack3.id

dcard6.save

dcard7.stack_id = sample_stack3.id

dcard7.save

dcard8.stack_id = sample_stack3.id

dcard8.save

dcard9.stack_id = sample_stack3.id

dcard9.save

dcard10.stack_id = sample_stack3.id

dcard10.save




