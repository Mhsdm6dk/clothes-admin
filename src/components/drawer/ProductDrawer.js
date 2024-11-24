import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Textarea, Select } from '@windmill/react-ui';
import ReactTagInput from '@pathofdev/react-tag-input';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import InputValue from '../form/InputValue';
import SelectOption from '../form/SelectOption';
import DrawerButton from '../form/DrawerButton';
import Uploader from '../image-uploader/Uploader';
import ChildrenCategory from '../category/ChildrenCategory';
import ParentCategory from '../category/ParentCategory';
import useProductSubmit from '../../hooks/useProductSubmit';
import TableCustom from './TableCustom';

const ProductDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    image,
    setImage,
    size,
    setSize,
  } = useProductSubmit(id);


  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Cập nhật sản phẩm"
            description="Cập nhật thông tin sản phẩm tại đây"
          />
        ) : (
          <Title
            title="Thêm sản phẩm"
            description="Thêm thông tin sản phẩm tại đây"
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }} className="block">
          <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Image" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader image={image} setImage={setImage} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="SKU" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="true"
                  label="SKU"
                  name="sku"
                  type="text"
                  placeholder="Product title"
                />
                <Error errorName={errors.sku} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Tên sản phẩm" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="true"
                  label="Tên sản phẩm"
                  name="name"
                  type="text"
                  placeholder="Tên sản phẩm"
                />
                <Error errorName={errors.name} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Danh mục" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="false"
                  label="Danh mục"
                  name="category"
                  type="text"
                  placeholder="Danh mục"
                />
                <Error errorName={errors.category} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Mô tả" />
              <div className="col-span-8 sm:col-span-4">
                <Textarea
                  className="border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                  {...register('describes', {
                    required: 'Description is required!',
                    minLength: {
                      value: 20,
                      message: 'Minimum 20 character!',
                    },
                  })}
                  name="describes"
                  placeholder="Product details"
                  rows="4"
                  spellCheck="false"
                />
                <Error errorName={errors.describes} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Giá" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Giá"
                  name="price"
                  type="number"
                  placeholder="Giá"
                />
                <Error errorName={errors.unit} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Giá Sale" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={1000}
                  minValue={0}
                  label="Sale"
                  name="sale"
                  type="number"
                  placeholder="Sale"
                />
                <Error errorName={errors.quantity} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Size" />
              <div className="col-span-8 sm:col-span-4">

                <TableCustom data={size} setSize={setSize} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Chiều dài" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={1000}
                  minValue={0}
                  label="length"
                  name="length"
                  type="number"
                  placeholder="Chiều dài"
                />
                <Error errorName={errors.quantity} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Chu vi" />
              <div className="col-span-8 sm:col-span-4">
                <InputValue
                  register={register}
                  maxValue={1000}
                  minValue={0}
                  label="perimeter"
                  name="perimeter"
                  type="number"
                  placeholder="Chu vi"
                />
                <Error errorName={errors.quantity} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Màu sắc" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="color"
                  name="color"
                  options={[{
                    value: "Xanh",
                    label: "Xanh"
                  },
                  {
                    value: "Đỏ",
                    label: "Đỏ"
                  },
                  {
                    value: "Vàng",
                    label: "Vàng"
                  },
                  {
                    value: "Hồng",
                    label: "Hồng"
                  },
                  {
                    value: "Đen",
                    label: "Đen"
                  },
                  {
                    value: "Trắng",
                    label: "Trắng"
                  },
                  {
                    value: "Xám",
                    label: "Xám"
                  },
                  {
                    value: "Tím",
                    label: "Tím"
                  }]}
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Chất liệu" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="material"
                  name="material"
                  options={[{
                    value: "Cotton",
                    label: "Cotton"
                  },
                  {
                    value: "Nỉ",
                    label: "Nỉ"
                  },
                  {
                    value: "Len",
                    label: "Len"
                  },
                  {
                    value: "Denim",
                    label: "Denim"
                  },
                  {
                    value: "Polyester",
                    label: "Polyester"
                  },
                  {
                    value: "Cotton",
                    label: "Cotton"
                  },
                  {
                    value: "Lụa",
                    label: "Lụa"
                  }]}
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Kiểu dáng" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="style"
                  name="style"
                  options={[{
                    value: "Áo thun",
                    label: "Áo thun"
                  },
                  {
                    value: "Bộ liền",
                    label: "Bộ liền"
                  },
                  {
                    value: "Áo hoodie",
                    label: "Áo hoodie"
                  },
                  {
                    value: "Áo khoác",
                    label: "Áo khoác"
                  },
                  {
                    value: "Áo len",
                    label: "Áo len"
                  },
                  {
                    value: "Chân váy",
                    label: "Chân váy"
                  },
                  {
                    value: "Váy",
                    label: "Váy"
                  },
                  {
                    value: "Quần",
                    label: "Quần"
                  },
                  {
                    value: "Áo sơ mi",
                    label: "Áo sơ mi"
                  }]}
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Hoạ tiết" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="texture"
                  name="texture"
                  options={[{
                    value: "Trơn",
                    label: "Trơn"
                  },
                  {
                    value: "Hoa văn",
                    label: "Hoa văn"
                  },
                  {
                    value: "Sọc",
                    label: "Sọc"
                  },
                  {
                    value: "Trơn",
                    label: "Trơn"
                  },
                  {
                    value: "Kẻ caro",
                    label: "Kẻ caro"
                  },
                  {
                    value: "Đơn sắc",
                    label: "Đơn sắc"
                  }]}
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Phụ kiện" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="accessory"
                  name="accessory"
                  options={[{
                    value: "Không",
                    label: "Không"
                  },
                  {
                    value: "Mũ trùm",
                    label: "Mũ trùm"
                  },
                  {
                    value: "Khóa kéo",
                    label: "Khóa kéo"
                  },
                  {
                    value: "Cúc",
                    label: "Cúc"
                  },
                  {
                    value: "Thắt lưng",
                    label: "Thắt lưng"
                  }]}
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Độ dày" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="thickness"
                  name="thickness"
                  options={[{
                    value: "Mỏng",
                    label: "Mỏng"
                  },
                  {
                    value: "Vừa",
                    label: "Vừa"
                  },
                  {
                    value: "Dày",
                    label: "Dày"
                  }]}
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Tính năng đặc biệt" />
              <div className="col-span-8 sm:col-span-4">
                <SelectOption
                  register={register}
                  label="nature"
                  name="nature"
                  options={[{
                    value: "Giữ ấm",
                    label: "Giữ ấm"
                  },
                  {
                    value: "Chống nắng",
                    label: "Chống nắng"
                  },
                  {
                    value: "Thoáng khí",
                    label: "Thoáng khí"
                  },
                  {
                    value: "Chống nước",
                    label: "Chống nước"
                  }]}
                />
                <Error errorName={errors.productType} />
              </div>
            </div>
            
          </div>

          <DrawerButton id={id} title="Product" />
        </form>
      </Scrollbars>
    </>
  );
};

export default React.memo(ProductDrawer);
