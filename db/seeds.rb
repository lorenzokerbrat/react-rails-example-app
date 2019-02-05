# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Feature.destroy_all
Test.destroy_all

f1 = Feature.create({name: "Have a features page" })
f2 = Feature.create({name: "Have a tests page" })
f1.tests.create({ name: "features should have a name", status: "Passed", feature_id: 1 })
f1.tests.create({ name: "features should have a list of tests", status: "Passed", feature_id: 1 })
f2.tests.create({ name: "tests should have a name", status: "Undefined", feature_id: 2 })