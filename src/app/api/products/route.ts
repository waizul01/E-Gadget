import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  await dbConnect();

  const products = await Product.find({});

  return NextResponse.json(
    {
      success: true,
      message: "Products retrieved successfully.",
      data: products,
    },
    { status: 200 }
  );
};

export const POST = async (request: NextRequest) => {
  const payload = await request.json();
  console.log(payload);
  await dbConnect();

  const newProduct = await Product.create(payload.data);

  return NextResponse.json(
    {
      success: true,
      message: "Product created successfully.",
      data: newProduct,
    },
    { status: 201 }
  );
};

export const PUT = async (request: NextRequest) => {
  const payload = await request.json();
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  console.log(payload, id);
  await dbConnect();

  const updatedProduct = await Product.findByIdAndUpdate(id, payload.data, {
    new: true,
  });

  return NextResponse.json(
    {
      success: true,
      message: "Product updated successfully.",
      data: updatedProduct,
    },
    { status: 200 }
  );
};

export const DELETE = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  console.log(id);
  await dbConnect();

  await Product.findByIdAndDelete(id);

  return NextResponse.json(
    {
      success: true,
      message: "Product deleted successfully.",
    },
    { status: 200 }
  );
};
