class TestsController < ApplicationController
    def index
        render json: Test.all.to_json, each_serializer: TestSerializer
    end

    def show
        render json: Test.where('feature_id': params[:id]).all.to_json, each_serializer: TestSerializer
    end

    def create
        @test = Test.new({ name: 'New test', status: 'Undefined', feature_id: params[:feature_id] })
        @test.save
        render json: @test.to_json, each_serializer: TestSerializer
    end


end
