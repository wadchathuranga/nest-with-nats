import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  productId: string;

  @Prop()
  productName: string;

  @Prop()
  productColor: string;

  @Prop()
  productPrice: string;

  @Prop()
  productDescription: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
