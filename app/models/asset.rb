class Asset < ActiveRecord::Base

  has_many :plans
  belongs_to :test
  
  TYPES = [
    ['audio', 'audio'],
    ['seminar', 'seminario'],
    ['convention', 'convencion'],
    ['training', 'capacitacion'],
    ['document', 'documento'],
    ['plan', 'plan']
  ]

  validates :asset_type, inclusion: {in: TYPES.map{ |pairs| pairs[0] } }

  scope :by_asset_type, -> (asset_type){where(asset_type: asset_type)}
  scope :by_keyword, -> (keyword){where("LOWER(title) like '%#{keyword}%' OR LOWER(description) like '%#{keyword}%' OR LOWER(author) like '%#{keyword}%'")}
end
