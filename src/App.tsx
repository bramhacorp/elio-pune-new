/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { ClothingSection } from './components/ClothingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CollectionModal } from './components/CollectionModal';
import { AppointmentModal } from './components/AppointmentModal';
import { StudioModal } from './components/StudioModal';
import { LookbookDrawer } from './components/LookbookDrawer';
import { ProductItem } from './data/products';
import { Sparkles, X } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [collectionCategory, setCollectionCategory] = useState<'all' | 'jewellery' | 'clothing'>('all');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentService, setAppointmentService] = useState('Private Bridal Styling & Trousseau');
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);

  // Lookbook persistence in localStorage
  const [lookbook, setLookbook] = useState<ProductItem[]>(() => {
    try {
      const saved = localStorage.getItem('elio_lookbook');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('elio_lookbook', JSON.stringify(lookbook));
    } catch {
      // ignore
    }
  }, [lookbook]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleToggleLookbook = (product: ProductItem) => {
    const exists = lookbook.some((item) => item.id === product.id);
    if (exists) {
      setLookbook((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed "${product.name}" from your Lookbook`);
    } else {
      setLookbook((prev) => [...prev, product]);
      showToast(`Added "${product.name}" to your Curated Lookbook`);
    }
  };

  const isSavedInLookbook = (id: string) => {
    return lookbook.some((item) => item.id === id);
  };

  const handleOpenAppointmentModal = (serviceName?: string) => {
    if (serviceName) {
      setAppointmentService(serviceName);
    }
    setIsAppointmentOpen(true);
  };

  const handleOpenCollection = (category: 'all' | 'jewellery' | 'clothing' = 'all') => {
    setCollectionCategory(category);
    setIsCollectionOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#222222] flex flex-col font-sans selection:bg-[#2C2926] selection:text-[#FAF7F2]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161513] text-[#FAF7F2] text-xs px-4 py-3 border border-[#3A3632] shadow-xl flex items-center gap-3 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#8C827A] hover:text-white ml-2 p-0.5"
            aria-label="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        onOpenStudioModal={() => setIsStudioOpen(true)}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenLookbookDrawer={() => setIsLookbookOpen(true)}
        lookbookCount={lookbook.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreCollections={() => handleOpenCollection('all')} />

        {/* Our Products Section */}
        <ProductsSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onExploreAll={() => handleOpenCollection('jewellery')}
          onToggleLookbook={handleToggleLookbook}
          isSavedInLookbook={isSavedInLookbook}
        />

        {/* Our Clothing Section */}
        <ClothingSection
          onExploreClothing={() => handleOpenCollection('clothing')}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Let's Connect Contact Section */}
        <ContactSection
          onOpenStudioModal={() => setIsStudioOpen(true)}
          onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        />
      </main>

      {/* Footer */}
      <Footer onOpenStudioModal={() => setIsStudioOpen(true)} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleLookbook={handleToggleLookbook}
        isSavedInLookbook={isSavedInLookbook}
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* Full Catalog / Collection Explorer Modal */}
      <CollectionModal
        isOpen={isCollectionOpen}
        onClose={() => setIsCollectionOpen(false)}
        initialCategory={collectionCategory}
        onSelectProduct={(product) => {
          setIsCollectionOpen(false);
          setSelectedProduct(product);
        }}
        onToggleLookbook={handleToggleLookbook}
        isSavedInLookbook={isSavedInLookbook}
        onOpenAppointmentModal={(serviceNote) => {
          setIsCollectionOpen(false);
          handleOpenAppointmentModal(serviceNote);
        }}
      />

      {/* Private Atelier Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialService={appointmentService}
      />

      {/* Pune Flagship Studio Modal */}
      <StudioModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        onOpenAppointmentModal={() => {
          setIsStudioOpen(false);
          handleOpenAppointmentModal('Flagship Studio Private Consultation');
        }}
      />

      {/* Curated Lookbook / Wishlist Drawer */}
      <LookbookDrawer
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        lookbook={lookbook}
        onRemoveItem={(id) => {
          setLookbook((prev) => prev.filter((i) => i.id !== id));
          showToast('Piece removed from lookbook');
        }}
        onClearLookbook={() => {
          setLookbook([]);
          showToast('Lookbook cleared');
        }}
        onSelectProduct={(product) => setSelectedProduct(product)}
        onOpenAppointmentModal={(serviceNote) => handleOpenAppointmentModal(serviceNote)}
      />
    </div>
  );
}
