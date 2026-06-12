import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  FaPlus, FaTrash, FaEdit, FaCalendarAlt, FaImage, FaClipboardList,
  FaBell, FaFileAlt, FaEnvelope, FaChartBar, FaHome, FaSignOutAlt,
  FaChevronDown, FaTimes, FaFire, FaUpload, FaFolderOpen, FaUserCircle,
  FaDownload, FaCheckCircle, FaFileUpload, FaBars
} from 'react-icons/fa';
import { MdOutlineAddBox } from 'react-icons/md';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // campus, annual, sports, notice, updates, admission, contact, results, holiday
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsSidebarOpen(false);
  };
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isHolidayOpen, setIsHolidayOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [noticeDate, setNoticeDate] = useState(new Date().toISOString().split('T')[0]);
  const [isHot, setIsHot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // Results form states
  const [studentName, setStudentName] = useState('');
  const [year, setYear] = useState('Primary');
  const [marathi, setMarathi] = useState('');
  const [english, setEnglish] = useState('');
  const [hindi, setHindi] = useState('');
  const [mathematics, setMathematics] = useState('');
  const [science, setScience] = useState('');
  const [socialStudies, setSocialStudies] = useState('');

  // Holiday form states
  const [holidayList, setHolidayList] = useState([{ name: '', day: '', date: '' }]);
  const [holidaySessionYear, setHolidaySessionYear] = useState('2026-2027');
  const [originalYear, setOriginalYear] = useState('');
  const [editingHolidayId, setEditingHolidayId] = useState(null);

  // Delete confirm state
  const [deleteConfirm, setDeleteConfirm] = useState({ isOpen: false, type: null, payload: null });

  // Date range filter state
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Add new row to holiday list
  const addHolidayRow = () => {
    setHolidayList([...holidayList, { name: '', day: '', date: '' }]);
  };

  // Remove row from holiday list
  const removeHolidayRow = (index) => {
    if (holidayList.length > 1) {
      const newList = holidayList.filter((_, i) => i !== index);
      setHolidayList(newList);
    }
  };

  // Update specific field in holiday row
  const updateHolidayField = (index, field, value) => {
    const newList = [...holidayList];
    newList[index][field] = value;
    setHolidayList(newList);
  };

  // Edit holiday group
  const handleEditHolidayGroup = (year, items) => {
    setEditingHolidayId('GROUP_EDIT');
    setHolidaySessionYear(year);
    setOriginalYear(year);
    setHolidayList(items.map(item => ({ name: item.name, day: item.day, date: item.date })));
    setIsModalOpen(true);
  };

  const handleEditHoliday = (item) => {
    setEditingHolidayId(item._id);
    setHolidaySessionYear(item.year);
    setHolidayList([{ name: item.name, day: item.day, date: item.date }]);
    setIsModalOpen(true);
  };

  const handleDeleteHolidayGroup = (items) => {
    setDeleteConfirm({ isOpen: true, type: 'group', payload: items });
  };

  const galleryItems = [
    { id: 'campus', label: 'Campus Tour', icon: <FaImage /> },
    { id: 'annual', label: 'Annual Functions', icon: <FaImage /> },
    { id: 'sports', label: 'Sports Meet', icon: <FaImage /> },
    { id: 'achievements', label: 'Achievements', icon: <FaImage /> },
    { id: 'slider', label: 'Slider Images', icon: <FaImage /> },
  ];

  // Helper to close modal and reset holiday form
  const closeHolidayModal = () => {
    setIsModalOpen(false);
    setEditingHolidayId(null);
    setOriginalYear('');
    setHolidayList([{ name: '', day: '', date: '' }]);
  };

  const menuItems = [
    { id: 'notice', label: 'Notice Board', icon: <FaClipboardList /> },
  ];

  const updateItems = [
    { id: 'updates', label: 'School Updates', icon: <FaBell /> },
  ];

  const admissionItems = [
    { id: 'admission', label: 'Admission Forms', icon: <FaFileAlt /> },
    { id: 'contact', label: 'Contact Inquiries', icon: <FaEnvelope /> },
  ];

  const resultsItems = [
    // Results section can be added here if needed for student marks in future
  ];

  const holidayItems = [
    { id: 'holiday', label: 'Holidays', icon: <FaCalendarAlt /> },
  ];

  const allItems = [...galleryItems, ...menuItems, ...updateItems, ...admissionItems, ...resultsItems, ...holidayItems, { id: 'dashboard', label: 'Dashboard' }];
  const currentSection = allItems.find(i => i.id === activeTab);

  const isResultsSection = activeTab === 'results';
  const isHolidaySection = activeTab === 'holiday';
  const isGallerySection = galleryItems.some(i => i.id === activeTab);
  const isNoticeSection = menuItems.some(i => i.id === activeTab) || updateItems.some(i => i.id === activeTab);
  const isFormSection = admissionItems.some(i => i.id === activeTab);
  const isUpdateSection = activeTab === 'updates';

  // Fetch data for active tab
  const fetchData = async () => {
    if (activeTab === 'dashboard') return;
    try {
      let endpoint = '';
      if (isGallerySection) endpoint = `https://admin.vidyabharatischool.education/api/gallery/${activeTab}`;
      else if (isNoticeSection) endpoint = `https://admin.vidyabharatischool.education/api/notice/${activeTab}`;
      else if (isHolidaySection) endpoint = `https://admin.vidyabharatischool.education/api/holiday`;
      else if (isFormSection) endpoint = `https://admin.vidyabharatischool.education/api/${activeTab}`;

      const response = await axios.get(endpoint);
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = activeTab === 'slider' ? 5 * 1024 * 1024 : 2 * 1024 * 1024;
    const maxSizeText = activeTab === 'slider' ? '5MB' : '2MB';

    if (file && file.size > maxSize) {
      toast.error(`File size must be less than ${maxSizeText}`);
      e.target.value = null; // Clear input
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  // Function to compress image before upload
  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          // Set max dimensions
          const maxWidth = 1200;
          const maxHeight = 1200;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to compressed data URL with quality 0.7
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
      };
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (isGallerySection) {
      if (!selectedFile) return toast.error('Please select a file');
      const maxSize = activeTab === 'slider' ? 5 * 1024 * 1024 : 2 * 1024 * 1024;
      const maxSizeText = activeTab === 'slider' ? '5MB' : '2MB';
      if (selectedFile.size > maxSize) return toast.error(`File size must be less than ${maxSizeText}`);
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('category', activeTab);
        if (title) formData.append('title', title);

        const response = await axios.post('https://admin.vidyabharatischool.education/api/gallery/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.data.success) {
          toast.success('Upload Successful!');
          setIsModalOpen(false);
          setSelectedFile(null);
          setTitle('');
          fetchData();
        }
      } catch (error) {
        toast.error('Upload failed');
      } finally {
        setLoading(false);
      }
    } else if (isNoticeSection) {
      if (!title) return toast.error('Please enter a title');
      setLoading(true);
      try {
        const response = await axios.post('https://admin.vidyabharatischool.education/api/notice/create', {
          title,
          category: activeTab,
          isHot,
          link,
          date: noticeDate
        });

        if (response.data.success) {
          toast.success('Notice Added Successful!');
          setIsModalOpen(false);
          setTitle('');
          setLink('');
          setIsHot(false);
          setNoticeDate(new Date().toISOString().split('T')[0]);
          fetchData();
        }
      } catch (error) {
        toast.error('Failed to add notice');
      } finally {
        setLoading(false);
      }
    } else if (isResultsSection) {
      // Results section is not currently in use
      toast.error('Results section is not configured');
      return;
    } else if (isHolidaySection) {
      // Filter out empty rows if any
      const validRows = holidayList.filter(h => h.name && h.day && h.date);
      if (validRows.length === 0) return toast.error('Please fill at least one holiday row');
      if (!holidaySessionYear) return toast.error('Please enter Session Year');

      setLoading(true);
      try {
        if (editingHolidayId) {
          if (editingHolidayId === 'GROUP_EDIT') {
            // For group edit, we'll delete all current holidays for this year and re-insert
            // This is the simplest way to handle additions/removals in bulk
            const originalHolidays = data.filter(h => h.year === originalYear);

            // Delete all original ones
            await Promise.all(originalHolidays.map(h =>
              axios.delete(`https://admin.vidyabharatischool.education/api/holiday/${h._id}`)
            ));

            // Insert all new ones
            const holidaysWithYear = validRows.map(h => ({
              name: h.name,
              day: h.day,
              date: h.date,
              year: holidaySessionYear
            }));
            await axios.post('https://admin.vidyabharatischool.education/api/holiday/create', holidaysWithYear);

            toast.success('Holidays Updated Successfully!');
          } else {
            // Update single holiday (legacy/individual edit)
            await axios.put(`https://admin.vidyabharatischool.education/api/holiday/${editingHolidayId}`, {
              ...validRows[0],
              year: holidaySessionYear
            });
            toast.success('Holiday Updated Successfully!');
          }

          closeHolidayModal();
          fetchData();
        } else {
          // Create multiple holidays
          const holidaysWithYear = validRows.map(h => ({ ...h, year: holidaySessionYear }));
          const response = await axios.post('https://admin.vidyabharatischool.education/api/holiday/create', holidaysWithYear);

          if (response.data.success) {
            toast.success('Holidays Added Successfully!');
            setIsModalOpen(false);
            setHolidayList([{ name: '', day: '', date: '' }]);
            fetchData();
          }
        }
      } catch (error) {
        toast.error(editingHolidayId ? 'Failed to update holiday' : 'Failed to add holidays');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDelete = (id) => {
    setDeleteConfirm({ isOpen: true, type: 'single', payload: id });
  };

  const executeDelete = async () => {
    if (deleteConfirm.type === 'single') {
      const id = deleteConfirm.payload;
      try {
        let endpoint = '';
        if (isGallerySection) endpoint = `https://admin.vidyabharatischool.education/api/gallery/${id}`;
        else if (isNoticeSection) endpoint = `https://admin.vidyabharatischool.education/api/notice/${id}`;
        else if (isFormSection) endpoint = `https://admin.vidyabharatischool.education/api/${activeTab}/${id}`;
        else if (isHolidaySection) endpoint = `https://admin.vidyabharatischool.education/api/holiday/${id}`;

        await axios.delete(endpoint);
        fetchData();
        toast.success('Deleted successfully');
      } catch (error) {
        toast.error('Delete failed');
      }
    } else if (deleteConfirm.type === 'group') {
      const items = deleteConfirm.payload;
      try {
        setLoading(true);
        await Promise.all(items.map(item =>
          axios.delete(`https://admin.vidyabharatischool.education/api/holiday/${item._id}`)
        ));
        fetchData();
        toast.success('Holidays deleted successfully');
      } catch (error) {
        toast.error('Delete failed');
      } finally {
        setLoading(false);
      }
    }
    setDeleteConfirm({ isOpen: false, type: null, payload: null });
  };

  // CSV Download Function
  const downloadAsCSV = () => {
    if (data.length === 0) {
      toast.error('No data to download');
      return;
    }

    let csvContent = '';
    let headers = [];
    let rows = [];

    let filteredData = data;
    if (startDate || endDate) {
      filteredData = data.filter(item => {
        const itemDate = new Date(item.createdAt);
        itemDate.setHours(0, 0, 0, 0);

        let start = startDate ? new Date(startDate) : null;
        let end = endDate ? new Date(endDate) : null;

        if (start) start.setHours(0, 0, 0, 0);
        if (end) end.setHours(0, 0, 0, 0);

        if (start && end) {
          return itemDate >= start && itemDate <= end;
        } else if (start) {
          return itemDate >= start;
        } else if (end) {
          return itemDate <= end;
        }
        return true;
      });
    }

    if (filteredData.length === 0) {
      toast.error('No data found for the selected range');
      return;
    }

    if (activeTab === 'admission') {
      headers = ['Student Name', 'Parent Name', 'Grade', 'Last School', 'Contact', 'Status', 'Date'];
      rows = filteredData.map(item => [
        item.studentName,
        item.parentName,
        item.grade,
        item.previousSchool || 'N/A',
        item.contactNumber,
        item.status,
        new Date(item.createdAt).toLocaleDateString()
      ]);
    } else if (activeTab === 'contact') {
      headers = ['Name', 'Contact', 'Message', 'Date'];
      rows = filteredData.map(item => [
        item.name,
        item.contact,
        `"${item.message.replace(/"/g, '""')}"`, // Escape quotes in message
        new Date(item.createdAt).toLocaleDateString()
      ]);
    }

    // Create CSV content
    csvContent = headers.join(',') + '\n';
    csvContent += rows.map(row =>
      row.map(cell =>
        typeof cell === 'string' && cell.includes(',')
          ? `"${cell}"`
          : cell
      ).join(',')
    ).join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `${activeTab}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper to group holidays by year
  const groupedHolidays = isHolidaySection ? data.reduce((groups, holiday) => {
    const year = holiday.year || 'Unknown';
    if (!groups[year]) groups[year] = [];
    groups[year].push(holiday);
    return groups;
  }, {}) : {};

  // Grouped years array
  const holidayYears = Object.keys(groupedHolidays).sort().reverse();

  return (
    <div className="min-h-screen bg-[#fafafa] flex font-sans">
      {/* Delete Confirmation Modal */}
      {deleteConfirm.isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-5">
          <div className="bg-white max-w-sm w-full rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-red-500 p-6 text-white text-center">
              <FaTrash className="text-4xl mx-auto mb-2 opacity-80" />
              <h3 className="text-xl font-black uppercase tracking-widest">Confirm Deletion</h3>
            </div>
            <div className="p-8 text-center space-y-6">
              <p className="text-gray-600 font-bold">
                {deleteConfirm.type === 'group'
                  ? `Are you sure you want to delete all holidays for session ${deleteConfirm.payload[0]?.year}?`
                  : 'Are you sure you want to delete this permanently?'}
              </p>
              <p className="text-xs text-red-400 font-black uppercase tracking-wider">This action cannot be undone.</p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setDeleteConfirm({ isOpen: false, type: null, payload: null })}
                  className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 rounded-xl font-black uppercase tracking-wider text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={executeDelete}
                  disabled={loading}
                  className="flex-1 py-3 bg-red-500 hover:bg-red-600 transition-colors text-white rounded-xl font-black uppercase tracking-wider text-xs"
                >
                  {loading ? 'Deleting...' : 'Yes, Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-5">
          <div className={`bg-white w-full ${isHolidaySection ? 'max-w-2xl' : 'max-w-lg'} rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]`}>
            <div className="bg-primary p-6 text-white flex justify-between items-center shrink-0">
              <h3 className="text-lg font-black font-serif italic flex items-center gap-3">
                {editingHolidayId ? <FaEdit /> : <FaPlus />} {editingHolidayId ? 'Edit' : 'Add New'} {currentSection?.label}
              </h3>
              <button type="button" onClick={closeHolidayModal} className="text-xl hover:rotate-90 transition-transform"><FaTimes /></button>
            </div>
            <form onSubmit={handleUpload} className="p-8 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6 mb-6">
                {isGallerySection && (
                  <div className="space-y-4">
                    <label className="block text-primary font-black text-xs uppercase tracking-widest ml-2">
                      Select Image
                    </label>
                    <div className="relative group">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        accept="image/*"
                      />
                      <div className="w-full py-12 border-4 border-dashed border-gray-100 rounded-[2rem] flex flex-col items-center justify-center group-hover:border-secondary/20 transition-all bg-gray-50">
                        <span className="text-4xl mb-2 text-secondary/40">
                          {selectedFile ? <FaCheckCircle className="text-green-500" /> : <FaFileUpload />}
                        </span>
                        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest text-center px-4">
                          {selectedFile ? selectedFile.name : 'Click to Browse or Drag & Drop'}
                        </p>
                        {!selectedFile && (
                          <p className="text-red-400 font-bold text-[10px] mt-2 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
                            Max File Size: {activeTab === 'slider' ? '5 MB' : '2 MB'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {isResultsSection ? (
                  <>
                    {/* This section can be reused for other purposes in the future */}
                    <div className="text-center py-8">
                      <p className="text-gray-500 font-bold">Results section is currently not in use</p>
                    </div>
                  </>
                ) : isHolidaySection ? (
                  <div className="space-y-4">
                    {/* Session Year at Top */}
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center gap-4">
                      <label className="text-primary font-black text-[10px] uppercase tracking-widest shrink-0">Session Year:</label>
                      <input
                        type="text"
                        value={holidaySessionYear}
                        onChange={(e) => setHolidaySessionYear(e.target.value)}
                        className="flex-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg focus:border-secondary outline-none font-bold text-gray-700 text-sm"
                        placeholder="e.g. 2026-2027"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center px-1">
                        <label className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">Holidays List</label>
                        <button
                          type="button"
                          onClick={addHolidayRow}
                          className="bg-secondary/10 text-secondary px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all flex items-center gap-2"
                        >
                          <FaPlus className="text-[8px]" /> Add New Holiday
                        </button>
                      </div>
                      {holidayList.map((holiday, index) => (
                        <div key={index} className="flex flex-wrap md:flex-nowrap gap-2 items-end bg-white p-3 border border-gray-100 rounded-2xl shadow-sm relative group hover:border-secondary/20 transition-all">
                          <div className="flex-1 min-w-[150px]">
                            <label className="text-[9px] font-black uppercase text-gray-400 mb-1 block">Holiday Name</label>
                            <input
                              type="text"
                              value={holiday.name}
                              onChange={(e) => updateHolidayField(index, 'name', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:border-secondary outline-none text-sm font-bold text-gray-700"
                              placeholder="Diwali"
                              required
                            />
                          </div>
                          <div className="w-full md:w-32">
                            <label className="text-[9px] font-black uppercase text-gray-400 mb-1 block">Day</label>
                            <input
                              type="text"
                              value={holiday.day}
                              onChange={(e) => updateHolidayField(index, 'day', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:border-secondary outline-none text-sm font-bold text-gray-700"
                              placeholder="Monday"
                              required
                            />
                          </div>
                          <div className="w-full md:w-40">
                            <label className="text-[9px] font-black uppercase text-gray-400 mb-1 block">Date</label>
                            <input
                              type="text"
                              value={holiday.date}
                              onChange={(e) => updateHolidayField(index, 'date', e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:border-secondary outline-none text-sm font-bold text-gray-700"
                              placeholder="25 Oct 2026"
                              required
                            />
                          </div>

                          {holidayList.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeHolidayRow(index)}
                              className="p-2 text-red-400 hover:text-red-600 transition-colors bg-red-50 rounded-lg"
                              title="Remove this holiday"
                            >
                              <FaTimes className="text-sm" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {!isGallerySection && (
                      <div className="space-y-2">
                        <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">
                          {isUpdateSection ? 'Ticker Message' : isNoticeSection ? 'Notice Description' : 'Entry Title (Optional)'}
                        </label>
                        {isNoticeSection ? (
                          <textarea
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={isUpdateSection ? "Enter the scrolling message here..." : "Enter notice details here..."}
                            rows="4"
                            className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700 resize-none"
                          ></textarea>
                        ) : (
                          <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a title for this entry"
                            className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700"
                          />
                        )}
                      </div>
                    )}

                    {isNoticeSection && (
                      <div className="space-y-2">
                        <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">External Link (Optional)</label>
                        <input
                          type="url"
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                          placeholder="e.g. https://example.com"
                          className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700"
                        />
                      </div>
                    )}

                    {isNoticeSection && !isUpdateSection && (
                      <div className="space-y-2">
                        <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">Select Date</label>
                        <input
                          type="date"
                          value={noticeDate}
                          onChange={(e) => setNoticeDate(e.target.value)}
                          className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700"
                        />
                      </div>
                    )}

                    {isNoticeSection && (
                      <div className="flex items-center gap-3 ml-2">
                        <input
                          type="checkbox"
                          id="isHot"
                          checked={isHot}
                          onChange={(e) => setIsHot(e.target.checked)}
                          className="w-5 h-5 accent-secondary"
                        />
                        <label htmlFor="isHot" className="text-primary font-black text-xs uppercase tracking-widest cursor-pointer">Mark as "Hot News"</label>
                      </div>
                    )}
                  </>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-secondary text-white font-black py-4 rounded-2xl transition-all duration-300 shadow-xl uppercase tracking-widest text-sm shrink-0 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:shadow-primary/30'}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing & Uploading...
                  </span>
                ) : isGallerySection ? 'Start Upload' : isHolidaySection ? (editingHolidayId ? 'Update Holiday' : 'Add Holiday(s)') : 'Start Upload'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed md:static inset-y-0 left-0 w-64 bg-primary text-white flex flex-col shadow-2xl z-40 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} shrink-0`}>
        <div className="p-6 bg-primary border-b border-white/10 flex items-center justify-center">
          <h2 className="text-xl font-black font-serif italic tracking-tight text-white uppercase">Admin Portal</h2>
        </div>

        <nav className="flex-1 mt-8">
          <div className="px-4 space-y-2">
            {/* Dashboard Home Link */}
            <button
              onClick={() => handleTabChange('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${activeTab === 'dashboard' ? "text-white bg-white/10" : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
            >
              <FaHome className="text-lg opacity-80" /> Dashboard
            </button>

            {/* Gallery Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-sm font-bold ${isGalleryOpen ? "text-white bg-white/10" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <FaImage className="text-lg opacity-80" /> Gallery
                </div>
                <span className={`text-[10px] transition-transform duration-300 ${isGalleryOpen ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </span>
              </button>

              {isGalleryOpen && (
                <div className="ml-4 pl-4 border-l-2 border-accent/30 space-y-1 mt-2">
                  {galleryItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleTabChange(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === item.id
                          ? "text-accent bg-accent/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <span className="opacity-80">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Main Menu Items */}
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${activeTab === item.id
                    ? "text-accent bg-accent/10"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}

            {/* School Updates - Separate Section */}
            {updateItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${activeTab === item.id
                    ? "text-secondary bg-secondary/10"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <span className="animate-pulse">{item.icon}</span>
                {item.label}
              </button>
            ))}

            {/* Admissions Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setIsAdmissionsOpen(!isAdmissionsOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-sm font-bold ${isAdmissionsOpen ? "text-white bg-white/10" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <FaFileAlt className="text-lg opacity-80" /> Admissions
                </div>
                <span className={`text-[10px] transition-transform duration-300 ${isAdmissionsOpen ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </span>
              </button>

              {isAdmissionsOpen && (
                <div className="ml-4 pl-4 border-l-2 border-accent/30 space-y-1 mt-2">
                  {admissionItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleTabChange(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === item.id
                          ? "text-accent bg-accent/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <span className="opacity-80">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Results Items */}
            {resultsItems.length > 0 && resultsItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === item.id
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                <span>{item.icon}</span> {item.label}
              </button>
            ))}

            {/* Holiday Items */}
            <div className="space-y-1">
              <button
                onClick={() => setIsHolidayOpen(!isHolidayOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-sm font-bold ${isHolidayOpen ? "text-white bg-white/10" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-lg opacity-80" /> Holiday Mgmt
                </div>
                <span className={`text-[10px] transition-transform duration-300 ${isHolidayOpen ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </span>
              </button>

              {isHolidayOpen && (
                <div className="ml-4 pl-4 border-l-2 border-accent/30 space-y-1 mt-2">
                  {holidayItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleTabChange(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === item.id
                          ? "text-accent bg-accent/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <span className="opacity-80">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => window.location.href = '/'}
            className="w-full py-3 bg-secondary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 h-20 flex items-center justify-between px-4 md:px-10 shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-primary/60 text-2xl p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars />
            </button>
            <div className="hidden sm:flex items-center gap-3 text-gray-400 text-sm font-bold uppercase tracking-widest">
              <span className="text-primary/40">Dashboard</span>
              <span className="text-accent">/</span>
              <span className="text-primary">{currentSection?.label}</span>
            </div>
            <div className="sm:hidden flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest truncate max-w-[150px]">
              <span className="text-primary truncate">{currentSection?.label}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-primary uppercase tracking-tighter">School Administrator</p>
              <p className="text-[10px] text-gray-400 font-bold">Active Session</p>
            </div>
            <div className="w-10 h-10 bg-primary/5 rounded-full border-2 border-primary/10 flex items-center justify-center text-xl text-primary/60">
              <FaUserCircle />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-10 overflow-y-auto bg-[#fafafa]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
              <div>
                <h1 className="text-2xl md:text-4xl font-black text-primary font-serif italic">
                  {currentSection?.label}
                </h1>
                <p className="text-gray-400 font-bold text-xs md:text-sm mt-2 tracking-wide">
                  {isFormSection ? 'View and manage user submissions.' : "Manage and update your school's official data."}
                </p>
              </div>
              <div className="flex gap-4 items-end flex-wrap">
                {isFormSection && (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">From Date</label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="px-5 py-3.5 rounded-2xl border-2 border-gray-100 bg-white text-sm font-bold text-primary focus:outline-none focus:border-secondary transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">To Date</label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="px-5 py-3.5 rounded-2xl border-2 border-gray-100 bg-white text-sm font-bold text-primary focus:outline-none focus:border-secondary transition-all"
                      />
                    </div>
                    {(startDate || endDate) && (
                      <button
                        onClick={() => { setStartDate(''); setEndDate(''); }}
                        className="mb-1 text-[10px] font-black text-red-400 hover:text-red-500 uppercase tracking-widest px-2"
                      >
                        Clear Filter
                      </button>
                    )}
                    <button
                      onClick={downloadAsCSV}
                      className="bg-accent text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-accent/20 hover:-translate-y-1 transition-all flex items-center gap-3"
                    >
                      <FaDownload className="text-xl" /> Download CSV
                    </button>
                  </>
                )}
                {!isFormSection && activeTab !== 'dashboard' && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-secondary text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-all flex items-center gap-3"
                  >
                    <FaPlus className="text-xl" /> {isUpdateSection ? 'Add New Ticker Msg' : 'Add New Entry'}
                  </button>
                )}
              </div>
            </div>

            {(() => {
              let displayData = data;
              if (isFormSection && (startDate || endDate)) {
                displayData = data.filter(item => {
                  const itemDate = new Date(item.createdAt);
                  itemDate.setHours(0, 0, 0, 0);

                  let start = startDate ? new Date(startDate) : null;
                  let end = endDate ? new Date(endDate) : null;

                  if (start) start.setHours(0, 0, 0, 0);
                  if (end) end.setHours(0, 0, 0, 0);

                  if (start && end) {
                    return itemDate >= start && itemDate <= end;
                  } else if (start) {
                    return itemDate >= start;
                  } else if (end) {
                    return itemDate <= end;
                  }
                  return true;
                });
              }

              return displayData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {isHolidaySection ? (
                    holidayYears.map((year) => {
                      const yearItems = groupedHolidays[year];
                      return (
                        <div key={year} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-primary/5 border border-gray-100 group relative flex flex-col h-full">
                          <div className="p-8 flex flex-col h-full bg-white relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full"></div>

                            <div className="flex justify-between items-start mb-6 relative">
                              <div className="bg-secondary/10 p-4 rounded-2xl text-2xl text-secondary">
                                <FaCalendarAlt />
                              </div>
                              <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
                                Session {year}
                              </span>
                            </div>

                            <div className="flex-1 space-y-4 relative">
                              <div className="space-y-3">
                                {yearItems.map((h, i) => (
                                  <div key={h._id} className={`flex justify-between items-center py-2 group/item ${i !== yearItems.length - 1 ? 'border-b border-gray-50' : ''}`}>
                                    <div className="flex items-center gap-3">
                                      <div>
                                        <p className="text-primary font-bold text-sm">{h.name}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">{h.day}</p>
                                      </div>
                                    </div>
                                    <p className="text-secondary font-black text-xs">{h.date}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="mt-8 flex items-center justify-between relative z-10 border-t pt-6">
                              <button
                                onClick={() => handleEditHolidayGroup(year, yearItems)}
                                className="text-blue-500 font-black text-[10px] uppercase tracking-widest hover:text-blue-700 transition-colors flex items-center gap-2"
                              >
                                <FaEdit /> Edit Group
                              </button>
                              <button
                                onClick={() => handleDeleteHolidayGroup(yearItems)}
                                className="text-red-500 font-black text-[10px] uppercase tracking-widest hover:text-red-700 transition-colors flex items-center gap-2"
                              >
                                <FaTrash /> Delete All
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    displayData.map((item) => (
                      <div key={item._id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-primary/5 border border-gray-100 group relative">
                        {isGallerySection && (
                          <>
                            <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-50 border-b border-gray-100">
                              <img src={item.imageUrl?.startsWith('/uploads') ? `https://admin.vidyabharatischool.education${item.imageUrl}` : item.imageUrl} alt={item.title} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="text-primary font-black text-sm truncate uppercase tracking-tight">{item.title || 'Untitled Image'}</h4>
                              <button
                                onClick={() => handleDelete(item._id)}
                                className="mt-4 text-red-500 font-black text-[10px] uppercase tracking-widest hover:text-red-700 transition-colors"
                              >
                                Delete Permanently
                              </button>
                            </div>
                          </>
                        )}

                        {isFormSection && (
                          <div className="p-8 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                              <div className="bg-primary/5 p-3 rounded-xl text-xl text-primary/60">
                                {activeTab === 'admission' ? <FaFileAlt /> : <FaEnvelope />}
                              </div>
                              <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${item.status === 'pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'
                                }`}>
                                {item.status}
                              </span>
                            </div>

                            <div className="space-y-4 flex-1">
                              {activeTab === 'admission' ? (
                                <>
                                  <div>
                                    <h4 className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Student / Parent</h4>
                                    <p className="text-primary font-bold">{item.studentName}</p>
                                    <p className="text-gray-500 text-xs font-medium">{item.parentName}</p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Grade</h4>
                                      <p className="text-secondary font-bold text-xs">{item.grade}</p>
                                    </div>
                                    <div>
                                      <h4 className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Contact</h4>
                                      <p className="text-primary font-bold text-xs">{item.contactNumber}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Last School</h4>
                                    <p className="text-gray-600 text-xs font-bold italic">{item.previousSchool || 'Not Provided'}</p>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <h4 className="text-[10px] text-gray-400 font-black uppercase tracking-widest">From</h4>
                                    <p className="text-primary font-bold">{item.name}</p>
                                    <p className="text-secondary font-bold text-xs">{item.contact}</p>
                                  </div>
                                  <div>
                                    <h4 className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Message</h4>
                                    <p className="text-gray-600 text-xs font-medium line-clamp-3 italic">"{item.message}"</p>
                                  </div>
                                </>
                              )}
                              <p className="text-[9px] text-gray-300 font-bold uppercase pt-2">Submitted: {new Date(item.createdAt).toLocaleString()}</p>
                            </div>

                            <button
                              onClick={() => handleDelete(item._id)}
                              className="mt-6 text-red-500 font-black text-[10px] uppercase tracking-widest hover:text-red-700 transition-colors self-start"
                            >
                              Delete Record
                            </button>
                          </div>
                        )}

                        {isNoticeSection && !isFormSection && (
                          <div className="p-8 flex flex-col justify-between h-full">
                            <div className="flex gap-4 items-start">
                              <div className="bg-primary/5 p-4 rounded-2xl text-2xl text-primary/60">
                                {isUpdateSection ? <FaBell className="animate-pulse" /> : <FaClipboardList />}
                              </div>
                              <div>
                                <h4 className="text-primary font-black text-sm uppercase tracking-tight leading-tight">{item.title}</h4>
                                <p className="text-[10px] text-gray-400 font-bold mt-2 uppercase">{new Date(item.date).toLocaleDateString()}</p>
                                {item.isHot && <span className="inline-block mt-2 px-2 py-0.5 bg-secondary text-white text-[8px] font-black uppercase rounded animate-pulse">Hot</span>}
                              </div>
                            </div>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="mt-6 text-red-500 font-black text-[10px] uppercase tracking-widest hover:text-red-700 transition-colors self-start"
                            >
                              Delete Permanently
                            </button>
                          </div>
                        )}
                        {isResultsSection && (
                          <div className="p-8 flex flex-col h-full">
                            <p className="text-gray-500 font-bold text-center">Results section is not configured</p>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-primary/5 min-h-[450px] flex flex-col items-center justify-center p-16 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32"></div>

                  <div className="w-24 h-24 bg-primary/5 rounded-[2rem] flex items-center justify-center text-4xl mb-8 border border-primary/10 relative z-10 text-primary/40">
                    {activeTab === 'dashboard' ? <FaHome /> : (currentSection?.icon || <FaChartBar />)}
                  </div>
                  <h3 className="text-2xl font-black text-primary font-serif mb-3 relative z-10">
                    {activeTab === 'dashboard' ? 'Welcome to Admin Portal' : 'No Data Available'}
                  </h3>
                  <p className="text-gray-400 font-bold text-sm max-w-sm mb-10 relative z-10">
                    {activeTab === 'dashboard'
                      ? 'Select a section from the sidebar to manage your school data, gallery images, notices and more.'
                      : `This section for ${currentSection?.label} is currently empty. Start by adding new records.`}
                  </p>
                  {activeTab !== 'dashboard' && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="relative z-10 text-secondary font-black text-xs uppercase tracking-[0.2em] border-b-2 border-secondary/20 hover:border-secondary transition-all pb-1"
                    >
                      Create First Entry
                    </button>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
