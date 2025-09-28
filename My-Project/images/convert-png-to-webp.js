/**
 * 转换 PNG 为 WebP
 *
 * */
const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');

// 配置项
const config = {
  inputDir: './vue-cli/',           // 输入目录（你的 PNG 所在目录）
  outputDir: './vue-cli/',          // 输出目录（可设为不同目录）
  quality: 80,                    // WebP 质量 (0-100)
  deleteOriginal: false,          // 是否删除原 PNG 文件
  recursive: true                // 是否递归处理子目录
};

async function convertPngToWebp(inputDir, outputDir) {
  // 确保输出目录存在
  await fs.ensureDir(outputDir);

  // 读取目录
  const files = await fs.readdir(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const stat = await fs.stat(inputPath);

    if (stat.isDirectory() && config.recursive) {
      // 递归处理子目录
      const subOutputDir = path.join(outputDir, file);
      await convertPngToWebp(inputPath, subOutputDir);
    } else if (file.toLowerCase().endsWith('.png')) {
      const outputFileName = path.basename(file, '.png') + '.webp';
      const outputPath = path.join(outputDir, outputFileName);

      try {
        await sharp(inputPath)
          .webp({quality: config.quality})
          .toFile(outputPath);

        console.log(`✅ 转换成功: ${inputPath} → ${outputPath}`);

        // 删除原 PNG（可选）
        if (config.deleteOriginal) {
          await fs.unlink(inputPath);
          console.log(`🗑️  已删除: ${inputPath}`);
        }
      } catch (err) {
        console.error(`❌ 转换失败: ${inputPath}`, err.message);
      }
    }
  }
}

// 主函数
async function main() {
  console.log('🚀 开始转换 PNG 为 WebP...');
  console.log('配置:', config);

  try {
    await convertPngToWebp(config.inputDir, config.outputDir);
    console.log('🎉 所有图片转换完成！');
  } catch (err) {
    console.error('💥 转换过程中出错:', err);
  }
}

// 运行
main();
