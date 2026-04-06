import React from 'react';

export default function InstructorUploads() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-headline font-black text-3xl text-primary tracking-tighter">Upload Materials</h2>
        <p className="text-slate-500 font-body mt-2">Upload videos, PDFs, and resources for your courses.</p>
      </div>

      <div className="bg-surface-container-lowest p-12 rounded-3xl text-center border-2 border-dashed border-surface-variant hover:border-secondary transition-colors cursor-pointer group">
        <div className="w-20 h-20 bg-surface-container-low group-hover:bg-secondary-fixed/30 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
          <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-secondary transition-colors">cloud_upload</span>
        </div>
        <h3 className="font-headline font-bold text-xl text-primary mb-2">Drag & Drop Files Here</h3>
        <p className="text-slate-500 max-w-md mx-auto mb-8">Supported formats: MP4, PDF, ZIP, DOCX. Maximum file size: 2GB.</p>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-headline font-bold text-sm hover:opacity-90 transition-all">
          Browse Files
        </button>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl p-8">
        <h3 className="font-headline font-bold text-lg text-primary mb-6">Recent Uploads</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">picture_as_pdf</span>
              </div>
              <div>
                <p className="font-bold text-sm text-primary">React_Hooks_Cheatsheet.pdf</p>
                <p className="text-xs text-slate-500">2.4 MB • Uploaded 2 hours ago</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-primary">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">movie</span>
              </div>
              <div>
                <p className="font-bold text-sm text-primary">Lesson_01_Introduction.mp4</p>
                <p className="text-xs text-slate-500">145 MB • Uploaded yesterday</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-primary">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
