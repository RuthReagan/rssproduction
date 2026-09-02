from PIL import Image

def crop_to_16_9(input_path, output_path):
    img = Image.open(input_path)
    width, height = img.size
    
    # Calculate target dimensions for 16:9
    target_ratio = 16 / 9
    current_ratio = width / height
    
    if current_ratio > target_ratio:
        # Image is wider than 16:9, crop width
        new_width = int(height * target_ratio)
        left = (width - new_width) // 2
        img_cropped = img.crop((left, 0, left + new_width, height))
    else:
        # Image is taller than 16:9, crop height
        new_height = int(width / target_ratio)
        top = (height - new_height) // 2
        img_cropped = img.crop((0, top, width, top + new_height))
    
    img_cropped.save(output_path, quality=95, optimize=True)
    print(f"Cropped {input_path} to {img_cropped.size[0]}x{img_cropped.size[1]} (16:9)")

# Crop both images
crop_to_16_9('hero-consulting.jpg', 'hero-consulting-temp.jpg')
crop_to_16_9('oklahoma-landscape.jpg', 'oklahoma-landscape-temp.jpg')
