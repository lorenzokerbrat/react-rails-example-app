class FeaturesController < ApplicationController
    def index
        render json: Feature.all.to_json, each_serializer: FeatureSerializer
    end

    def show
        render json: Feature.find(params[:id]).to_json, each_serializer: FeatureSerializer
    end

    def new
    end
    
    def create
        @feature = Feature.new(feature_params)
 
        @feature.save
        redirect_to @feature
    end

    private
        def feature_params
            params.require(:feature).permit(:name, :tests)
        end
end
