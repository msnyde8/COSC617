class Address < ActiveRecord::Base
  validates :name, :address, :phone, presence: true
  validates :name, uniqueness: true
end
