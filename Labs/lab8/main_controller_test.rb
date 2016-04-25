require 'test_helper'

class MainControllerTest < ActionController::TestCase
  setup do
    @address = addresses(:one)
    @update = {
        name: "John Doe", address: "123 Easy Street", phone: "666-777-8888"
    }
  end

  test "should get index" do
    get :index
    assert_response :success
  end

#  test "should get add" do
#    get :add
#    assert_response :success
#  end

#  test "should get delete" do
#    get :delete, id: @address
#    assert_response :success
#  end

  test "should get edit" do
    get :edit, id: @address
    assert_response :success
  end

  test "should create address" do
    assert_difference('Address.count', 1) do
      post :add, address: @update
    end
  end

  test "should destroy address" do
    assert_difference('Address.count', -1) do
      post :delete, id: @address
    end
  end
end
