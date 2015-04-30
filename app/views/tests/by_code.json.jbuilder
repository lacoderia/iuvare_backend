if @test
  json.success true
  json.set! :result do
    json.extract! @test, :id, :name, :test_type, :code
    json.set! :questions do
      json.array! (@test.questions) do |question|
        json.extract! question, :id, :test_id, :text
        json.set! :answers do
          json.array! (question.answers) do |answer|
            json.extract! answer, :id, :question_id, :text
          end
        end
      end
    end
  end
else
  json.success false
  json.error @errors
end