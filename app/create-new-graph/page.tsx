'use client';

import MaxWidthWrapper from '../profile/widgets/MaxWidthWrapper';
import { Button } from '../profile/widgets/ui/button';
import { Card } from '../profile/widgets/ui/card';
import { Input } from '../profile/widgets/ui/input';
import { Label } from '../profile/widgets/ui/label';
import { Textarea } from '../profile/widgets/ui/textarea';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const CreateNewGraph = () => {
  const [color, setColor] = useState<string>('#fffff');

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col w-full gap-7 md:gap-9">
        <span className="w-full text-3xl" style={{ color: 'black' }}>
          Create New Graph
        </span>

        <div className="flex flex-col gap-2">
          <Label htmlFor="name" style={{ color: 'black' }}>
            Name your graph!
          </Label>
          <Input name="name" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="description" style={{ color: 'black' }}>
            {'Add a description (optional)'}
          </Label>
          <Textarea name="name" />
        </div>

        <div className="flex flex-col gap-5">
          <Label style={{ color: 'black' }}>
            What color would you like your graph to be?
          </Label>
          <div className="flex w-full justify-center">
            <HexColorPicker color={color} onChange={setColor} />
          </div>
          <span
            className="flex w-full justify-center"
            style={{ color: 'black' }}
          >
            {color}
          </span>
        </div>

        <div className="flex w-full justify-start md:justify-end">
          <Button
            variant="secondary"
            style={{ backgroundColor: 'grey', color: 'black' }}
          >
            Create Graph
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CreateNewGraph;
