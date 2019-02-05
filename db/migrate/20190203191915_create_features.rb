class CreateFeatures < ActiveRecord::Migration[5.1]
  def change
    create_table :features do |t|
      t.string :name
      # t.references :tests, array: true, default: []

      t.timestamps
    end
    create_table :tests do |t|
      t.string :name
      t.string :status
      t.integer :feature_id
      
      t.timestamps
    end
  end
end
