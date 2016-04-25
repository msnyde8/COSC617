require 'test_helper'

class AddressTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  fixtures :addresses

  def new_address(addr_name)
    Address.new(name: addr_name, address: "123 Easy Street", email: "jane.doe@email.com", phone: "666-777-8888")
  end

  test "attributes must not be empty" do
    address = Address.new
    assert address.invalid?
    assert address.errors[:name].any?
    assert address.errors[:address].any?
    assert address.errors[:phone].any?
  end

    test "add duplicate name" do
      address = Address.new(name: addresses(:ruby).name, address: "123 Easy Street", email: "jane.doe@email.com", phone: "666-777-8888")
      assert address.invalid?
      assert_equal ["has already been taken"], address.errors[:name]
  end
end
