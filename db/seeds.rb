# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

admin = User.create(username:'admin', password_digest:'1234')

# admin_stack = Stack.create(category:'tutorial')

# admin_cards = Card.create(question:'question goes here', answer:'answer goes here')

sample = User.create(username:'sample', password_digest:'abcd')

# sample_stack = Stack.create(category:'vocabulary')

# sample_cards = Card.create(question:'flash card', answer:'A card containing a small amount of information, held up for students to see, as an aid to learning.')


