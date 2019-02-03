class FeaturesController < ApplicationController
    def index
        @features = Feature.all

        render json: JSON.pretty_generate(@features.to_json)
    end

    def show
        @feature = Feature.find(params[:id])
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
