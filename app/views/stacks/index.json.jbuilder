json.array!(@stacks) do |stack|
  json.extract! stack, :id, :category, :user_id_id
  json.url stack_url(stack, format: :json)
end
