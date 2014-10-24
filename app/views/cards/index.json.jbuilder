json.array!(@cards) do |card|
  json.extract! card, :id, :question, :answer, :stack_id_id
  json.url card_url(card, format: :json)
end
