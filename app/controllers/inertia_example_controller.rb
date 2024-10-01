class InertiaExampleController < ApplicationController
  def index
    render inertia: "InertiaExample", props: {
      name: params.fetch(:name, "World")
    }
  end

  def marketing_inertia
    render inertia: "marketing/Index", props: {
      name: params.fetch(:name, "pages/marketing/Index.jsx")
    }
  end
end
