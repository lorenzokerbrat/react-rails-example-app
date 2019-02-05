class FeatureSerializer < ActiveModel::Serializer
    attributes :name

    has_many :tests
end