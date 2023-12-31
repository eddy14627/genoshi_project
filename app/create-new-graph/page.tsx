'use client';

import MaxWidthWrapper from '../profile/widgets/MaxWidthWrapper';
import { Button } from '../profile/widgets/ui/button';
import { Card } from '../profile/widgets/ui/card';
import { Input } from '../profile/widgets/ui/input';
import { Label } from '../profile/widgets/ui/label';
import { Textarea } from '../profile/widgets/ui/textarea';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { RiImageAddFill, RiEyeFill } from 'react-icons/ri';

// Import icons from react-icons

const CreateNewGraph = () => {
  const [color, setColor] = useState<string>('#fffff');
  const [image, setImage] = useState<string | null>(null); // Store the uploaded image URL

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateGraph = () => {
    // Add logic to create the graph using the gathered data (name, description, color, and image URL)
    console.log('Creating graph...');
  };

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col w-full gap-7 md:gap-9">
        <span className="w-full text-3xl" style={{ color: 'white' }}>
          Create New Graph
        </span>

        <div className="flex flex-col gap-2">
          <Label htmlFor="name" style={{ color: 'white' }}>
            Name your graph!
          </Label>
          <Input name="name" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="description" style={{ color: 'white' }}>
            Add a description (optional)
          </Label>
          <Textarea name="description" />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="image" style={{ color: 'white' }}>
            Upload Image
          </Label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && <img src={image} alt="Graph Preview" className="mt-2" />}
        </div>

        {/* Color Picker */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="color" style={{ color: 'white' }}>
            Choose Graph Color
          </Label>
          <HexColorPicker color={color} onChange={setColor} />
        </div>

        {/* Buttons */}
        <div className="flex w-full justify-between items-center">
          <Button
            variant="secondary"
            style={{ backgroundColor: 'grey', color: 'white' }}
            onClick={handleCreateGraph}
          >
            Create Graph
          </Button>
          <label htmlFor="image" className="cursor-pointer">
            <RiImageAddFill size={24} />
          </label>
          <button onClick={handleCreateGraph}>
            <RiEyeFill size={24} />
            Preview Graph
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CreateNewGraph;
