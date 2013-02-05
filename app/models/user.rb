class User < ActiveRecord::Base
  validates :name,  presence: true
  validates :email, presence: true
  validates :age,   presence: true
  validates_numericality_of :age
end
